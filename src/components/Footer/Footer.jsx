import logo from '../../assets/images/logo.jpg'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div><img src={logo} alt="" /></div>
            <p>King-St4mp | Todos los derechos reservados</p>
        </div>
    )
}

export default Footer