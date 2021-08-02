
import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { Link, useHistory } from 'react-router-dom'

import './Header.css'

const Header = () => {
    const history = useHistory();
    const registationPage = ()=>{
        history.push('/registation')
    }
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="LOGO" className="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to="/">Home</Link>
                            <Link to="/">Donation</Link>
                            <Link to="/">Events</Link>
                            <Link to="/">Blog</Link>
                            <Button className="m-3" onClick={registationPage}>Registation</Button>
                            <Button className="m-3" variant="secondary">Admin</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;