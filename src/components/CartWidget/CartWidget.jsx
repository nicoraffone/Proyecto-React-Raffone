import cartIcon from '../../assets/images/cart-icon.png'
import './CartWidget.css'

const CartWidget = () => {
    return(
        <div className='cart'>
        <div><img className='cart-icon' src={cartIcon} alt="" /></div>
        <span id='cart-counter'>6</span>
        </div>
    )
}

export default CartWidget