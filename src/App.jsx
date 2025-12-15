import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { List_cars } from './components/layouts/list-cars'
import { Page_exit } from './components/layouts/car-exit'
import { Cadastro } from './components/layouts/Cadastro'
import { Login } from './components/layouts/Login'
import { Entrada } from './components/layouts/entry'
import api from './services/api'
import Toast from './components/Toast'

function App() {
  // lista simples de veículos em memória (fetched from API)
  const [vehicles, setVehicles] = useState([])
  const [selected, setSelected] = useState(null)

  const isAuth = Boolean(localStorage.getItem('token'))

  useEffect(() => {
    // load vehicles on mount
    (async () => {
      try {
        const v = await api.getVehicles()
        setVehicles(v.reverse())
      } catch (err) {
        console.error('failed to load vehicles', err)
      }
    })()
  }, [])

  const addVehicle = async (vehicle) => {
    try {
      const created = await api.createVehicle(vehicle.placa)
      // coloque no topo da lista
      setVehicles((prev) => [created, ...prev])
      return created
    } catch (err) {
      // rethrow so caller can handle and navigate
      throw new Error(err?.message || 'Erro ao registrar entrada')
    }
  }

  const requestExit = (placa) => {
    const v = vehicles.find((x) => x.placa === placa)
    setSelected(v || null)
  }

  const confirmExit = async (placa) => {
    try {
      // buscar veículo por placa
      const found = await api.findVehicleByPlaca(placa)
      if (!found || found.length === 0) throw new Error('Veículo não encontrado')
      const id = found[0].id
      await api.deleteVehicle(id)
      setVehicles((prev) => prev.filter((v) => v.placa !== placa))
      setSelected(null)
      return true
    } catch (err) {
      throw new Error(err?.message || 'Erro na saída')
    }
  }

  return (
    <Router>
      <div style={{ padding: 20 }}>
        <Toast />
        <Routes>
          {/* start app at /login by redirecting root */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/list" element={isAuth ? <List_cars vehicles={vehicles} onRequestExit={requestExit} /> : <Navigate to="/login" replace />} />
          <Route path="/entrada" element={isAuth ? <Entrada onEnter={addVehicle} /> : <Navigate to="/login" replace />} />
          <Route path="/saida" element={isAuth ? <Page_exit vehicle={selected} onConfirmExit={confirmExit} /> : <Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
