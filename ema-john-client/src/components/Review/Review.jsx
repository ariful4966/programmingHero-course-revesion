import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import happyImg from '../../images/giphy.gif'
import { useHistory } from 'react-router';

const Review = (props) => {
    const [cart, setCart] = useState([])
    const { products } = props;
    const history = useHistory()

    const handleProceedCheckout = () => {
        if (cart.length === 0) {
            alert('Your Not add any products in your cart');
            history.push('/')
        } else {
            history.push('/shipment')
        }


    }

    // console.log(products);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productsKeys = Object.keys(savedCart);
        const cartProducts = productsKeys.map(key => {
            const product = products.find(pd => pd.key === key);
            product.quantity = savedCart[key]
            return product
        })
        setCart(cartProducts);
    }, [])

    const handleRemoveProduct = (key) => {
        const newCart = cart.filter(pd => pd.key !== key)
        setCart(newCart)
        removeFromDatabaseCart(key)
    }
    const thankyou = <img src={happyImg} alt="" />
    return (
        <div className="shop-container container">
            <div className="product-container">
                {
                    cart.map((pd, idx) => <Product
                        showBtn
                        removeBtn
                        handleRemoveProduct={handleRemoveProduct}
                        key={idx}
                        product={pd}
                    ></Product>)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}>
                    <button className='main-btn cart-btn' onClick={handleProceedCheckout}>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;