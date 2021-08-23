import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';

const Sidebar = ({ setSidebar, sidebar }) => {

    const activebare = (
        (sidebar === 'Order') ||
        (sidebar === 'Order List') ||
        (sidebar === 'Review') ||
        (sidebar === 'Service List') ||
        (sidebar === 'Add Service') ||
        (sidebar === 'Make Admin'))
        && 'text-success'
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
                        <Nav.Link className={sidebar === 'Order' && 'text-success'} onClick={() => setSidebar('Order')}><FontAwesomeIcon  /> Order</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={sidebar === 'Order List' && 'text-success'} onClick={() => setSidebar('Order List')}>Order List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={sidebar === 'Review' && 'text-success'} onClick={() => setSidebar('Review')} >Reviews</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={sidebar === 'Service List' && 'text-success'} onClick={() => setSidebar('Service List')}>Service List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={sidebar === 'Add Service' && 'text-success'} onClick={() => setSidebar('Add Service')} > + Add Service</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={sidebar === 'Make Admin' && 'text-success'} onClick={() => setSidebar('Make Admin')}  >Make Admin </Nav.Link>
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