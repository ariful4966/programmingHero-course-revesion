import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const prd = cart[i];
        total += prd.price * prd.quantity;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0
    } else if (total > 15) {
        shipping = 4.99
    } else if (total > 0) {
        shipping = 12.99
    }

    const tax = total / 10;

    const formateNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision)
    }
    return (
        <>
            <h1>Order Summary</h1>
            <h3>Items Ordered: {cart.length}</h3>
            <div className="amount">
                <p><span>Product Price :</span> <span>${formateNumber(total)}</span></p>
                <p><span>Shipping Cost:</span> <span> ${formateNumber(shipping)}</span></p>
                <p><span>Tax + VAT: </span><span>${formateNumber(tax)}</span></p>
                <p className="total-price"><span>Total Price :</span> <span>${formateNumber(total + shipping + tax)}</span></p>
                <Link to="/review">
                    <button className={cart ? 'main-btn cart-btn' : 'main-btn'}>Order Preview</button>
                </Link>
            </div>
        </>
    );
};

export default Cart;