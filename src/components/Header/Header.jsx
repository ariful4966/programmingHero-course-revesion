import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Banner from '../Banner/Banner';
import { useContext } from 'react';
import { RoomData } from '../../App';
const Header = () => {
    const [, , , loggedInUser] = useContext(RoomData)
    console.log(loggedInUser);
    return (
        <header>
            <Container>
                <nav>
                    <div className="logo">
                        <h2>
                            <Link to="/">Burj-Al-Arab</Link>
                        </h2>
                    </div>
                    <div className="menuArea">
                        <ul className="menu">
                            <li>{loggedInUser.name}</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link >Book</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                </nav>
                <Banner />
            </Container>
        </header>
    );
};

export default Header;