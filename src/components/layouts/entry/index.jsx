import opalao from "../../../assets/Images/opala.svg"
import './style.css'
import { useState } from 'react'

export const Entrada = ({ onEnter }) => {
  const [placa, setPlaca] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!placa) return alert('Informe a placa')
    onEnter({ placa })
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
        <input value={placa} onChange={(e) => setPlaca(e.target.value)} placeholder="Placa" maxLength={10} />
        <button type="submit">Entrar</button>
      </form>
    </section>
  )
}
