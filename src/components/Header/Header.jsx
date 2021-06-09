import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { getDatabaseCart } from '../../utilities/databaseManager';
import SearchArea from '../Search/Search';

import './Header.css'
const Header = ({cart}) => {
    // const [cart, setCart] = useState([])
    // useEffect(()=>{
    //     const savedCart = getDatabaseCart();
    //     const productKeys = Object.keys(savedCart);
    //     setCart(productKeys);
    // }, [])
    return (
        <div className="header">
            <a href="/"><img src={logo} alt="LOGO" /></a>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/manage">Manage Inventory</Link>to
                <Link to="/login">Login</Link>
            </nav>
            <SearchArea cart={cart }  />
        </div>
    )
}

export default Header;