import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import { getDatabaseCart } from '../../utilities/databaseManager';
import SearchArea from '../Search/Search';

import './Header.css'
const Header = ({ cart }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="header">
            <a href="/"><img src={logo} alt="LOGO" /></a>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/manage">Manage Inventory</Link>
                { loggedInUser &&
                    <Link onClick={()=>{setLoggedInUser({})}}>Sign Out</Link>
                }
                    
            </nav>
            <SearchArea cart={cart} />
        </div>
    )
}

export default Header;