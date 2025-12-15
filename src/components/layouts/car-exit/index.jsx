import opalao from "../../../assets/Images/Opala.svg"
import './style.css'
import { useState } from 'react'

// Simples: imagem (opalao), h2, input (placa) e botão — sem cálculo (API irá cuidar)
export const Page_exit = ({ vehicle, onConfirmExit = () => {} }) => {
    const [placa, setPlaca] = useState(vehicle?.placa || '')

    // keep input in sync when selected vehicle changes
    if (vehicle && vehicle.placa && vehicle.placa !== placa) {
        setPlaca(vehicle.placa)
    }

    const handleExit = () => {
        if (!placa) return alert('Informe a placa para saída')
        onConfirmExit(placa)
        setPlaca('')
    }

    return (
        <section className="container-page">
            <article className="entrada-header">
                <img src={opalao} alt="logo" />
                <div className="entrada-info">
                    <h2>Saída</h2>
                </div>
            </article>

            <article className="content-inputs">
                <input value={placa} onChange={(e) => setPlaca(e.target.value)} placeholder="Placa" />
                <button className="btn-confirm" onClick={handleExit}>Sair</button>
            </article>
        </section>
    )
}