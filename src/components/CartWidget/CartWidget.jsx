import cartIcon from '../../assets/images/cart-icon.png'
import CartCounter from '../CartCounter/CartCounter'
import './CartWidget.css'


const CartWidget = () => {

    return(
        <div className='cart'>
        <div><img className='cart-icon' src={cartIcon} alt="" /></div>
        <CartCounter/>
        </div>
    )
}

export default CartWidget