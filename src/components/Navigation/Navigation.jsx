import React from 'react';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Navigation.scss'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link><AddShoppingCartIcon/></Link>
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

export default Navigation;