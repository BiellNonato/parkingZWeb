import Opalao from "../../../assets/Images/Opala.svg"
import Arrow from "../../../assets/Images/Arrow.svg"
import { Cards } from "../cards"
import './style.css'

export const List_cars = () => {
    return (
        <section className="list-container">
                <div className="up-container-list">
                <img src={Opalao} alt="" />
                <h2>Listagem de Veiculos</h2>
                <img id="img2" src={Arrow} alt="" />
                </div>
                <article className="content-card-list">
                    <Cards
                    placa="gtx-2024"
                    data="17/12/2025"
                    hora="17:55:25"
                    cor="black"
                    />
                    <Cards
                    placa="gtx-2024"
                    data="17/12/2025"
                    hora="17:55:25"
                    cor="black"
                    />
                    <Cards
                    placa="gtx-2024"
                    data="17/12/2025"
                    hora="17:55:25"
                    cor="black"
                    />
                </article>
        </section>
    )
} 