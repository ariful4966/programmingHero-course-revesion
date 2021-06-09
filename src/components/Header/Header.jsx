import { useEffect, useState } from 'react';
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
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                <a href="/login">Login</a>
            </nav>
            <SearchArea cart={cart }  />
        </div>
    )
}

export default Header;