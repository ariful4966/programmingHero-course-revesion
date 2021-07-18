
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';

const Shop = (props) => {
    const { cart, setCart, products } = props;


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    const getData = data
                    const savedCart = getDatabaseCart();
                    const productKeys = Object.keys(savedCart);
                    const previousCart = productKeys.map(existingKey => {
                        const product = getData.find(pd => pd.key === existingKey)
                        product.quantity = savedCart[existingKey];
                        return product
                    })
                    setCart(previousCart);
                }
                
            })


    }, [])


    const handleAddProduct = (product) => {

        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key)
            newCart = [...others, sameProduct]
        } else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);


    }



    return (
        <div className="shop-container container">
            <div className="product-container">
                {
                    products.map((product, id) => <Product
                        key={id}
                        showBtn={true}
                        product={product}
                        handleAddProduct={handleAddProduct}
                    ></Product>)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className='main-btn cart-btn'>Order Preview</button>
                    </Link>
                </Cart>
            </div>
        </div>
    )
}
export default Shop;