import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
    const { cart, removeFormCart } = props;
    console.log(props);
    return (
        <div>
            <h4>This is Cart: {cart.length}</h4>
            {
                cart.map(item => 
                    <li key={item.cartId}>{item.name}
                        <button onClick={() => removeFormCart(item.cartId)}>X</button></li>
                )
            }
        </div>
    );
};
const mapStateToProps = state => {
    return {
        cart: state.cart,
        products:state.products
    }
}
const mamDispatchToProps = {
    removeFormCart: removeFromCart
}

export default connect(mapStateToProps, mamDispatchToProps)(Cart);