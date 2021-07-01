import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Dataprovid } from '../../App';
import { getDatabaseCart } from '../../utilities/databaseManager';
import './Calculation.scss'

const Calculation = () => {
    const history = useHistory()
    const { data, setData } = useContext(Dataprovid)

    const subTotal = data.cart.reduce((ct, curr) => {
        const productValue = ct + curr.price * curr.quantity;
        return productValue;
    }, 0)
    const tax = subTotal / 100 * 5;
    let dileveryFee;
    if (subTotal <= 0) {
        dileveryFee = 0
    }
    else if (subTotal < 12) {
        dileveryFee = 10
    }
    else if (subTotal < 20) {
        dileveryFee = 7
    }
    else if (subTotal < 35) {
        dileveryFee = 5
    }
    else if (subTotal > 35) {
        dileveryFee = 4
    } else {
        dileveryFee = 0
    }

    const total = subTotal + tax + dileveryFee;

    const handleIncrement = (id) => {
        const cartItem = data.food.find(ct => ct.id === id);
        const count = cartItem.quantity + 1;
        cartItem.quantity = count;
        setData({ ...data, food: [...data.food, cartItem] })

    }
    const handleDecriment = (id) => {
        const cartItem = data.food.find(ct => ct.id === id);
        cartItem.quantity = cartItem.quantity - 1;
        setData({ ...data, food: [...data.food, cartItem] })

    }
    const orderComplate = () => {
        setData({ ...data, cart: [] })
        history.push('/location')
    }
    useEffect(() => {
        getDatabaseCart()
    }, [])
    return (
        <div className="added_cart_area">
            <p>From <strong>Gulshan Plaza Restura GPR</strong></p> <br />
            <p>Ariving in 20-30 min</p> <br />
            <p>107 Rd no 8</p>
            <div className="add_all_cart">
                {
                    data.cart.map(ct =>
                        <div className="single_cart">
                            <div className="cart_image">
                                <img src={ct.img.img1} alt="" />
                            </div>
                            <div className="cart_title">
                                <p>{ct.title}</p>
                                <h4>${ct.price * ct.quantity}</h4>
                                <small>Dilevary free</small>
                            </div>
                            <div className="cart_quantity">
                                <button onClick={() => handleDecriment(ct.id)}>-</button>
                                <strong>{ct.quantity}</strong>
                                <button onClick={() => handleIncrement(ct.id)}>+</button>
                            </div>
                        </div>
                    )
                }

            </div>
            <div className="added_cart_calculate">
                <div className="subtotal d-cart">
                    <span>Subtotal </span>
                    <span>${subTotal.toFixed(2)}</span>
                </div>
                <div className="tax d-cart">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                </div>
                <div className="dilevary_fee d-cart">
                    <span>Dilevary fee</span>
                    <span>${dileveryFee.toFixed(2)}</span>
                </div>
                <div className="total d-cart">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>
            {
                data.shipment.isDone ? <button className="btn btn-bg" onClick={orderComplate}>Order Process</button> :
                    <button className="btn-gray">Order Process</button>
            }
        </div>
    );
};

export default Calculation;