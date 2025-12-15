import Opalao from "../../../assets/Images/Opala.svg"
import Arrow from "../../../assets/Images/Arrow.svg"
import { Cards } from "../cards"
import './style.css'

export const List_cars = ({ vehicles = [], onRequestExit = () => {} }) => {
    return (
        <section className="list-container">
                <div className="up-container-list">
                <img src={Opalao} alt="" />
                <h2>Listagem de Veiculos</h2>
                <img id="img2" src={Arrow} alt="" />
                </div>
                <article className="content-card-list">
                    {vehicles.length === 0 && (
                        <p style={{ padding: 20 }}>Nenhum veículo no estacionamento</p>
                    )}
                    {vehicles.map((v) => (
                        <Cards
                          key={v.placa}
                          placa={v.placa}
                          data={new Date(v.entrada).toLocaleDateString()}
                          hora={new Date(v.entrada).toLocaleTimeString()}
                          cor={v.cor}
                          onExit={() => onRequestExit(v.placa)}
                        />
                    ))}
                </article>
        </section>
    )
} 