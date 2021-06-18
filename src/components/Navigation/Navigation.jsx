import React from 'react';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Navigation.scss'
import { connect } from 'react-redux';
import { useState } from 'react';
import CartModal from '../CartModal/CartModal';

const Navigation = (props) => {
    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(!modal)
    }
    const { cart } = props
    return (
        <nav>
            <ul>
                <li>
                    <Link ><AddShoppingCartIcon /> {cart.length}</Link>      
                </li>
                <li>
                    <Link to="/signup">Sign up</Link>
                </li>
                <li>
                    <Link to="/login" className="btn btn-bg">Login</Link>
                </li>
            </ul>

        </nav>
    );
};
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Navigation);