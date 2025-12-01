import Opalao from "../../../assets/Images/Opala.svg"
import './style.css'
export const Login = () => {
    return (
        <>
            <section className='Login-container'>
                <header className='Login-content'>
                    <img src={Opalao} alt="" />
                    <div className="Login-info">
                        <h1>ParkingZ</h1>
                        <p>Login</p>
                    </div>
                </header>
                <article className="login-inputs">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <button type="submit"></button>
                </article>
            </section>

        </>
    )
}