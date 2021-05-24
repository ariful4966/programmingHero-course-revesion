import Navbar from 'react-bootstrap/Navbar'
import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import CartModal from '../CartModal/CartModal';
import './Header.css'

const Header = ({ courses }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar bg="success" expand="lg" sticky="top" >
            <Container>

                    <Navbar.Brand href="/">Load uPdate</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/courses">All Courses</Nav.Link>
                        </Nav>
                        <Form inline>
                            <div style={{marginRight: '10px', cursor: 'pointer'}} onClick={handleShow}>🛒 <span >{courses.length}</span></div>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-dark">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    <CartModal setShow={setShow} show={show} enroll={courses}></CartModal>
            </Container>
        </Navbar>
    );
};

export default Header;
