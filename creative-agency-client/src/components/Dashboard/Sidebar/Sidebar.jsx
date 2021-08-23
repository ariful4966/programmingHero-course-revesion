import React from 'react';
import { Button,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar_area d-flex flex-column p-3 h-100">
            <div className="sidebar-logo w-100">
                <Link to="/">
                    <img src={logo} alt="" className="w-100" />
                </Link>
            </div>
            <div className="sidebar_controller">
                <Nav className="sidebar_menu d-flex flex-column align-items-start justify-content-evenly"
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/home">Order</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Service List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Reviews</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3" > + Add Service</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4" >Make Admin </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className="auth_controller" >
                    <Button variant="dark">Logout</Button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;