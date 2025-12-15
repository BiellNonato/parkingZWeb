import Opalao from "../../../assets/Images/Opala.svg"
import './style.css'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import api from '../../../services/api'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      try {
  const { user, token } = await api.login(email, senha)
        // store token/user in localStorage
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
  navigate('/list')
            } catch (err) {
                window.dispatchEvent(new CustomEvent('app-toast', { detail: { type: 'error', text: err?.message || 'Erro no login' } }))
            } finally {
        setLoading(false)
      }
    }

    return (
        <article className='Login-container'>
            <header className='Login-content'>
                <img src={Opalao} alt="" />
                <div className="Login-info">
                    <h1>ParkingZ</h1>
                    <p>Login</p>
                </div>
            </header>
            <article className="login-inputs">
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
                    <input type="text" placeholder="Email" maxLength={60} value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Senha" maxLength={30} value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    <button type="submit" disabled={loading}>{loading ? 'Entrando...' : 'Entrar'}</button>
                </form>
            </article>
            <div className="register-line">
                <p>Não tem login? <Link to="/cadastro"><span>cadastre-se</span></Link> </p>
            </div>
        </article>
    )
}