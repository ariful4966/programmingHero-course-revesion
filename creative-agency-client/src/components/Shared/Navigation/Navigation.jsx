import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Navigation.css'

const Navigation = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Link className="navbar-brand" to="/">
                    <img className="logo" src={logo} alt="" />
                </Link >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="nav-link mx-4" to="/">Home</Link>
                        <Link className="nav-link mx-4" to="/">Our Protfolio</Link>
                        <Link className="nav-link mx-4" to="/">Our Teem</Link>
                        <Link className="nav-link mx-4" to="/">Contact Us</Link>
                        <Button className="bg-master mx-4">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;