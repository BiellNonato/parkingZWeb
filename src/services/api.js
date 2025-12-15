const BASE = 'https://68ebe9a476b3362414cf0a7f.mockapi.io/estacionamento'

async function request(path, opts = {}) {
  const url = `${BASE}${path}`
  let res
  try {
    res = await fetch(url, opts)
  } catch (err) {
    // network error
    throw new Error(`Network error when requesting ${url}: ${err.message}`)
  }
  if (!res.ok) {
    let text = ''
    try { text = await res.text() } catch (e) { /* ignore */ }
    throw new Error(`${res.status} ${res.statusText} - ${text || 'No additional info'}`)
  }
  // try parse json, but if empty return null
  try {
    return await res.json()
  } catch (err) {
    return null
  }
}

export async function login(email, senha) {
  // mockapi has users with fields email and senha — filter via query
  const cleanEmail = (email || '').toLowerCase()
  const users = await request(`/users?email=${encodeURIComponent(cleanEmail)}&senha=${encodeURIComponent(senha)}`)
  if (users && users.length > 0) {
    const user = users[0]
    // return a simple token (mock)
    const token = `mock-token-${user.id}`
    return { user, token }
  }
  throw new Error('Credenciais inválidas')
}

export async function register(nome, email, senha) {
  const body = { nome, email: (email || '').toLowerCase(), senha }
  return request('/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
}

export async function getVehicles() {
  return request('/Veiculos')
}

export async function createVehicle(placa) {
  const body = { placa, data: new Date().toISOString() }
  return request('/Veiculos', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
}

export async function findVehicleByPlaca(placa) {
  const res = await request(`/Veiculos?placa=${encodeURIComponent(placa)}`)
  return res
}

export async function deleteVehicle(id) {
  return request(`/Veiculos/${id}`, { method: 'DELETE' })
}

export default { login, register, getVehicles, createVehicle, findVehicleByPlaca, deleteVehicle }
