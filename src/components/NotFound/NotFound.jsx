import './NotFound.css'
import tabla from '../../assets/images/tabla.jpg'

const NotFound = () => {
  return (
    <div className='not-f'>
        <h2>URL ERRONEA COLOCADA</h2>
        <div><img src={tabla} alt="" /></div>
    </div>
  )
}

export default NotFound