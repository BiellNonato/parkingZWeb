import opalao from "../../../assets/Images/opala.svg"

import './style.css'

export const Cadastro = () => {
    return (
        <section className='Cadastro-container'>
            <article className='Cadastro-content'>
                <img src={opalao} alt="" />
                <div className='Cadastro-info'>
                    <h1>ParkingZ</h1>
                    <p>Cadastro</p>
                </div>
            </article>
            <div className="inputs-cadastro">
                <input type="text" placeholder="Nome:" maxLength={20} required />
                <input type="Email" placeholder="Email:" maxLength={30} required />
                <input type="Password" placeholder="Senha:" maxLength={30} required />
                <button type="submit"><p>Cadastrar</p></button>
            </div>
        </section>
    )
}