import { Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Banner from '../Banner/Banner';
const Header = () => {
    return (
        <header>
            <Container>
                <nav>
                    <div className="logo">
                        <h2>
                            <Link>Burj-Al-Arab</Link>
                        </h2>
                    </div>
                    <div className="menuArea">
                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/book">Book</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                </nav>
                <Banner/>
            </Container>
        </header>
    );
};

export default Header;