import { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        const first10 = fakeData.slice(0, 10)
        setProducts(first10)
    }, [])

    const handleAddProduct = (product) => {

        const newCart = [...cart, product];
        setCart(newCart)

    }


    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map((product, id) => <Product
                        key={id}
                        product={product}
                        handleAddProduct={handleAddProduct}
                    ></Product>)
                }
            </div>
            <div className="card-container">
                <h3>This cart container</h3>
                <h5>Order Summary: {cart.length}</h5>
                
            </div>
        </div>
    )
}
export default Shop;