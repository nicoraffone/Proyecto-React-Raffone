import { Link } from 'react-router-dom'
import cartIcon from '../../assets/images/cart-icon.png'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return(
        <div className='cart'>
            <Link to="/cart">
                <img className='cart-icon' src={cartIcon} alt="" />
                <span id='cart-counter'>{cartQuantity()}</span>
            </Link>
        </div>
    )
}

export default CartWidget