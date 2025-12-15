import opalao from "../../../assets/Images/opala.svg"

import './style.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../../services/api'

export const Cadastro = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      try {
        await api.register(nome, email, senha)
        window.dispatchEvent(new CustomEvent('app-toast', { detail: { type: 'success', text: 'Cadastro realizado com sucesso. Faça login.' } }))
        navigate('/login')
      } catch (err) {
        window.dispatchEvent(new CustomEvent('app-toast', { detail: { type: 'error', text: 'Erro no cadastro: ' + (err?.message || err) } }))
      } finally {
        setLoading(false)
      }
    }

    return (
        <section className='Cadastro-container'>
            <article className='Cadastro-content'>
                <img src={opalao} alt="" />
                <div className='Cadastro-info'>
                    <h1>ParkingZ</h1>
                    <p>Cadastro</p>
                </div>
            </article>
            <form className="inputs-cadastro" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" maxLength={40} value={nome} onChange={(e)=>setNome(e.target.value)} required />
                <input type="email" placeholder="Email" maxLength={60} value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <input type="password" placeholder="Senha" maxLength={30} value={senha} onChange={(e)=>setSenha(e.target.value)} required />
                <button type="submit" disabled={loading}>{loading ? 'Cadastrando...' : 'Cadastrar'}</button>
            </form>
        </section>
    )
}