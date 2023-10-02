import './Cards.css'

const Cards = (props) => {


    return(
        <div className='cards'>
            <h3 className='card-title'>{props.title}</h3>
            <img className='card-img' src={props.img} alt="" />
            <p className='card-desc'>{props.desc}</p>
            <p className='card-price'>{props.price}</p>
            <button className='card-button'>Añadir al carrito</button>
        </div>
    )
}

export default Cards