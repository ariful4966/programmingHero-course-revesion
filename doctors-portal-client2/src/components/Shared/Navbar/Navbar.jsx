import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'

const Navigation = ({ home }) => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav ms-auto" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="nav-link mx-4" to="/">Home</Link>
                        <Link className="nav-link mx-4" to="/patients">Patients</Link>
                        <Link className="nav-link mx-4" to="/dashboard">Dashboard</Link>
                        <Link className={`nav-link mx-4 ${home && 'text-white'}`} to="/dashboard">Admin</Link>
                        <Nav.Link className={` mx-4 ${home && 'text-white'}`} href="#blog">Blog</Nav.Link>
                        <Nav.Link className={` mx-5 ${home && 'text-white'}`} href="#contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;