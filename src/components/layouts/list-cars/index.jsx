import Opalao from "../../../assets/Images/Opala.svg"
import Arrow from "../../../assets/Images/Arrow.svg"
import { Cards } from "../cards"
import { Menu } from "../Menu"
import './style.css'
import { useState } from 'react'

export const List_cars = ({ vehicles = [], onRequestExit = () => {} }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <section className="list-container">
                <div className="up-container-list">
                <img src={Opalao} alt="" />
                <h2>Listagem de Veiculos</h2>
                <img id="img2" src={Arrow} alt="" onClick={() => setMenuOpen(prev => !prev)} style={{ cursor: 'pointer', transform: menuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }} />
                </div>
                {/* Menu only visible on this page (overlay modal) */}
                <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
                <article className="content-card-list">
                    {vehicles.length === 0 && (
                        <p style={{ padding: 20 }}>Nenhum veículo no estacionamento</p>
                    )}
                    {vehicles.map((v) => {
                        const ts = v.data || v.entrada || v.createdAt
                        const date = ts ? new Date(ts) : null
                        return (
                        <Cards
                          key={v.id || v.placa}
                          placa={v.placa}
                          data={date ? date.toLocaleDateString() : ''}
                          hora={date ? date.toLocaleTimeString() : ''}
                          cor={v.cor || ''}
                          onExit={() => onRequestExit(v.placa)}
                        />)
                    })}
                </article>
        </section>
    )
} 