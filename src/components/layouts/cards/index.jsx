import car from "../../../assets/Images/car-logo.svg"
import './style.css'

export const Cards = ({placa, data, hora, cor, onExit}) =>{
    return(
        <div className='card-container'>
         <div className="card" onClick={onExit} style={{ cursor: onExit ? 'pointer' : 'default', display: 'flex', alignItems: 'center', gap: 24 }}>
            <img id="cardimg" src={car} alt="" />
            <div style={{display: 'flex', gap: 24}}>
              <p>{placa}</p>
              <p>{data}</p>
              <p>{hora}</p>
              <p>{cor}</p>
            </div>
         </div>
        </div>
    )
}