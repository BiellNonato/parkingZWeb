import car from "../../../assets/Images/car-logo.svg"
import './style.css'

export const Cards = ({placa, data, hora, cor, onExit}) =>{
    return(
        <div className='card-container'>
         <div className="card">
            <img id="cardimg" src={car} alt="" />
            <p>{placa}</p>
            <p>{data}</p>
            <p>{hora}</p>
            <p>{cor}</p>
            {onExit && <button className="btn-exit" onClick={onExit}>Saída</button>}
         </div>
        </div>
    )
}