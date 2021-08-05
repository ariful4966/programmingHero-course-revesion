
import React, { Fragment } from 'react';
import { Container, Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { Link, useHistory } from 'react-router-dom'

import './Header.css'
import { connect } from 'react-redux';

const Header = ({ user }) => {
    const history = useHistory();
    const registationPage = () => {
        history.push('/login')
    }
    const addminPage = () => {
        history.push('/admin')
    }
    const homePage = () => {
        history.push('/')
    }
    const dashboardPage = () => {
        history.push('/admin')

    }
    return (
        <header>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand onClick={homePage} >
                        <img src={logo} alt="LOGO" className="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to="/">Home</Link>
                            <Link to="/">Donation</Link>
                            <Link to="/events">Events</Link>
                            <Link to="/">Blog</Link>
                            {
                                user.isLogin ?
                                    <Fragment>
                                        {
                                            user.isAdmin ?
                                                <NavDropdown title={user.name} id="nav-dropdown">
                                                    <NavDropdown.Item eventKey="4.1" onClick={dashboardPage}>Dashboard</NavDropdown.Item>
                                                </NavDropdown>
                                                :
                                                <strong>{user.name}</strong>

                                        }
                                    </Fragment>
                                    :
                                    <Fragment>
                                        <Button className="m-3" onClick={registationPage}>Registation</Button>
                                        <Button className="m-3" variant="secondary" onClick={addminPage} disabled>Admin</Button>
                                    </Fragment>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);