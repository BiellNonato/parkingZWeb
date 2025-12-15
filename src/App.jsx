import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { List_cars } from './components/layouts/list-cars'
import { Page_exit } from './components/layouts/car-exit'
import { Cadastro } from './components/layouts/Cadastro'
import { Login } from './components/layouts/Login'
import { Entrada } from './components/layouts/entry'

function App() {
  // lista simples de veículos em memória
  const [vehicles, setVehicles] = useState([])
  const [selected, setSelected] = useState(null)

  const addVehicle = (vehicle) => {
    // adiciona timestamp de entrada
    const v = { ...vehicle, entrada: new Date().toISOString() }
    setVehicles((prev) => [v, ...prev])
  }

  const requestExit = (placa) => {
    const v = vehicles.find((x) => x.placa === placa)
    setSelected(v || null)
  }

  const confirmExit = (placa) => {
    // remove veículo da lista
    setVehicles((prev) => prev.filter((v) => v.placa !== placa))
    setSelected(null)
  }

  return (
    <Router>
      <div style={{ padding: 20 }}>
        <nav style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
          <Link to="/">Listagem</Link>
          <Link to="/entrada">Entrada</Link>
          <Link to="/saida">Saída</Link>
          <Link to="/login">Login</Link>
          <Link to="/cadastro">Cadastro</Link>
        </nav>

        <Routes>
          <Route path="/" element={<List_cars vehicles={vehicles} onRequestExit={requestExit} />} />
          <Route path="/entrada" element={<Entrada onEnter={addVehicle} />} />
          <Route path="/saida" element={<Page_exit vehicle={selected} onConfirmExit={confirmExit} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
