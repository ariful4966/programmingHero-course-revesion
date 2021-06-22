import React from 'react';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Navigation.scss'
import { useState } from 'react';
import { useContext } from 'react';
import { Dataprovid } from '../../App';
import CartModal from '../CartModal/CartModal';

const Navigation = () => {
    const { data } = useContext(Dataprovid)
    const { cart } = data;
    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(!modal)
    }
    return (
        <nav>
            <ul>
                <li>
                    <Link onClick={openModal}><AddShoppingCartIcon /> {cart.length}</Link>
                </li>
                <li>
                    <Link to="/signup">Sign up</Link>
                </li>
                <li>
                    <Link to="/login" className="btn btn-bg">Login</Link>
                </li>
            </ul>
            {
                modal && <CartModal cart={cart} modal={modal} setModal={setModal}></CartModal>
            }
        </nav>
    );
};


export default Navigation;