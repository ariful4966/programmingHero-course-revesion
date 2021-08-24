import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck, faClipboardList, faCommentDots, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css';
import { firebaseInitializationFramwork, logOut } from '../../Login/loginManeger';

const Sidebar = ({ setSidebar, sidebar }) => {
    const history = useHistory();
    
    firebaseInitializationFramwork();

    const handleLogOut = () => {
        logOut()
            .then((data) => {
                sessionStorage.removeItem('userToken')
                history.push('/')
            })
    }

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
                        <Nav.Link className={sidebar === 'Order' && 'text-success'} onClick={() => setSidebar('Order')}><FontAwesomeIcon icon={faShoppingCart} /> Order</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={sidebar === 'Order List' && 'text-success'} onClick={() => setSidebar('Order List')}><FontAwesomeIcon icon={faClipboardList} /> Order List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={sidebar === 'Review' && 'text-success'} onClick={() => setSidebar('Review')} ><FontAwesomeIcon icon={faCommentDots} /> Reviews</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={sidebar === 'Service List' && 'text-success'} onClick={() => setSidebar('Service List')}><FontAwesomeIcon icon={faClipboardCheck} /> Service List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={sidebar === 'Add Service' && 'text-success'} onClick={() => setSidebar('Add Service')} ><FontAwesomeIcon icon={faPlus} /> Add Service</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={sidebar === 'Make Admin' && 'text-success'} onClick={() => setSidebar('Make Admin')}  ><FontAwesomeIcon icon={faUserPlus} /> Make Admin </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className="auth_controller" >
                    <Button className="bg-master" onClick={handleLogOut}>Logout</Button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;