import opalao from "../../../assets/Images/opala.svg"
import './style.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Entrada = ({ onEnter }) => {
  const [placa, setPlaca] = useState('')
  const navigate = useNavigate()

  const normalizeInput = (p) => (p || '').toUpperCase().replace(/\s+/g, '')
  // preserve a single hyphen if user entered it (e.g. ABC-1234)
  const normalizePlaca = (p) => (p || '').toUpperCase().replace(/[^A-Z0-9-]/g, '')

  const isOldFormat = (raw) => /^[A-Z]{3}-?\d{4}$/.test(raw)
  const isMercosul = (raw) => /^[A-Z]{3}\d[A-Z]\d{2}$/.test(raw)

  const validPlaca = (raw) => {
    const r = normalizeInput(raw)
    // only accept old format (ABC-1234) or Mercosul (ABC1D23)
    return isOldFormat(r) || isMercosul(r)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!placa) {
      window.dispatchEvent(new CustomEvent('app-toast', { detail: { type: 'error', text: 'Informe a placa' } }))
      return
    }
    if (!validPlaca(placa)) {
      window.dispatchEvent(new CustomEvent('app-toast', { detail: { type: 'error', text: 'Placa inválida. Use formatos: ABC-1234, ABC1D23 ou ABC' } }))
      return
    }
    const normalized = normalizePlaca(placa)
    try {
      await onEnter({ placa: normalized })
      navigate('/list')
    } catch (err) {
      window.dispatchEvent(new CustomEvent('app-toast', { detail: { type: 'error', text: 'Erro ao registrar entrada: ' + (err?.message || err) } }))
    }
    setPlaca('')
  }

  return (
    <section className="entrada-container">
      <article className="entrada-header">
        <img src={opalao} alt="logo" />
        <div className="entrada-info">
          <h2>Entrada</h2>
        </div>
      </article>

      <form className="entrada-form" onSubmit={handleSubmit}>
  <input value={placa} onChange={(e) => setPlaca(e.target.value)} placeholder="Placa" maxLength={8} required />
        <button type="submit">Entrar</button>
      </form>
    </section>
  )
}
