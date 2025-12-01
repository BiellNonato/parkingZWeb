import Opalao from "../../../assets/Images/Opala.svg"
import './style.css'
export const Login = () => {
    return (
        <>
            <section className="Login">
                <article className='Login-container'>
                    <header className='Login-content'>
                        <img src={Opalao} alt="" />
                        <div className="Login-info">
                            <h1>ParkingZ</h1>
                            <p>Login</p>
                        </div>
                    </header>
                    <article className="login-inputs">
                        <input type="text" placeholder="Email:" maxLength={30} required />
                        <input type="password" placeholder="Senha:" maxLength={10} required />
                        <button type="submit"></button>
                    </article>
                    <div className="register-line">
                        <p>Não tem login? <span>cadastre-se</span> </p>
                    </div>
                </article>
            </section>


        </>
    )
}