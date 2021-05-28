import { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = (props) => {
    const { cart, setCart } = props;

    const [products, setProducts] = useState([]);

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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}
export default Shop;