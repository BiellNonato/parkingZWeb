import opalao from "../../../assets/Images/Opala.svg"
import './style.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Simples: imagem (opalao), h2, input (placa) e botão — sem cálculo (API irá cuidar)
export const Page_exit = ({ vehicle, onConfirmExit = () => {} }) => {
    const [placa, setPlaca] = useState(vehicle?.placa || '')
    const navigate = useNavigate()

    // keep input in sync when selected vehicle changes
    if (vehicle && vehicle.placa && vehicle.placa !== placa) {
        setPlaca(vehicle.placa)
    }

    const normalizeInput = (p) => (p || '').toUpperCase().replace(/\s+/g, '')
    // preserve hyphen if present (ABC-1234)
    const normalizePlaca = (p) => (p || '').toUpperCase().replace(/[^A-Z0-9-]/g, '')

    const isOldFormat = (raw) => /^[A-Z]{3}-?\d{4}$/.test(raw)
    const isMercosul = (raw) => /^[A-Z]{3}\d[A-Z]\d{2}$/.test(raw)

    const validPlaca = (raw) => {
        const r = normalizeInput(raw)
        // only accept old format (ABC-1234) or Mercosul (ABC1D23)
        return isOldFormat(r) || isMercosul(r)
    }

    const handleExit = async () => {
        if (!placa) {
            window.dispatchEvent(new CustomEvent('app-toast', { detail: { type: 'error', text: 'Informe a placa para saída' } }))
            return
        }
        if (!validPlaca(placa)) {
            window.dispatchEvent(new CustomEvent('app-toast', { detail: { type: 'error', text: 'Placa inválida para saída. Use ABC-1234, ABC1D23 ou ABC' } }))
            return
        }
        const normalized = normalizePlaca(placa)
        try {
            await onConfirmExit(normalized)
            setPlaca('')
            navigate('/list')
        } catch (err) {
            window.dispatchEvent(new CustomEvent('app-toast', { detail: { type: 'error', text: 'Erro ao processar saída: ' + (err?.message || err) } }))
        }
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
                <input value={placa} onChange={(e) => setPlaca(e.target.value)} placeholder="Placa" maxLength={8} required />
                <button className="btn-confirm" onClick={handleExit}>Sair</button>
            </article>
        </section>
    )
}