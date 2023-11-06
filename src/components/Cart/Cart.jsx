import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './Cart.css'
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, totalPrice, emptyCart } = useContext(CartContext)

    return (
        <div className="cart-container">
            <h1 className="">Carrito</h1>

        <div className="cart-products">
            {
                cart.map((prod) => (
                    <div className="cart-details" key={prod.id}>
                        <img src={prod.image} alt={prod.title} />
                        <div>
                        <h3>{prod.title}</h3>
                        <p>Precio unit: ${prod.price}</p>
                        <p>Precio total: ${prod.price * prod.quantity}</p>
                        <p>Cantidad: {prod.quantity}</p>
                        <div className="details-buttons">
                            <button>-</button>
                            <button>x</button>
                        </div>
                        </div>
                    </div>
                ))
            }
        </div>
            {   cart.length > 0 ?
                <>
                    <h2>Precio total: ${totalPrice()}</h2>
                <div className="cart-buy">
                    <button onClick={emptyCart}>Vaciar carrito</button>
                    <Link to="/checkout">Finalizar compra</Link>
                </div>
                </> :
                <h2>El carrito esta vacio</h2>
            }
        </div>
    )
}

export default Cart