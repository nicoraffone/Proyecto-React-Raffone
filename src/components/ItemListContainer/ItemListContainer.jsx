import Cards from '../Cards/Cards'
import './ItemListContainer.css'
import products from '../../assets/products/products.js'

const ItemListContainer = (prop) => {
    return(
        <div>
            <h2>{prop.title}</h2>
            <div className='products'>
                <Cards title={products[0].title} img={products[0].img} desc={products[0].desc} price={products[0].price} />
                <Cards title={products[1].title} img={products[1].img} desc={products[1].desc} price={products[1].price} />
                <Cards title={products[2].title} img={products[2].img} desc={products[2].desc} price={products[2].price} />
                <Cards title={products[3].title} img={products[3].img} desc={products[3].desc} price={products[3].price} />
                <Cards title={products[4].title} img={products[4].img} desc={products[4].desc} price={products[4].price} />
                <Cards title={products[5].title} img={products[5].img} desc={products[5].desc} price={products[5].price} />
                <Cards title={products[6].title} img={products[6].img} desc={products[6].desc} price={products[6].price} />
                <Cards title={products[7].title} img={products[7].img} desc={products[7].desc} price={products[7].price} />
            </div>
        </div>
    )
}

export default ItemListContainer