import React, { useEffect, useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck, faClipboardList, faCommentDots, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css';
import { firebaseInitializationFramwork, logOut } from '../../Login/loginManeger';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/action';

const Sidebar = ({ setSidebar, sidebar, url }) => {
    const [admin, setAdmin] = useState(false);
    const history = useHistory();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    firebaseInitializationFramwork();

    const handleLogOut = () => {
        logOut()
            .then((data) => {
                sessionStorage.removeItem('userToken')
                if (data) {
                    const newUser = {
                        name: '',
                        email: '',
                        photo: '',
                        isLogin: false
                    }
                    dispatch(loginUser(newUser))
                    history.push('/')
                }

            })
    }
    useEffect(() => {

        axios.get('http://localhost:5000/admin?email=' + user.email,)
            .then(data => {
                if (data.data.length > 0) {
                    setAdmin(true)
                }
            })
    }, [admin, user])
    return (
        <aside className="sidebar_area d-flex flex-column p-3 h-100 position-fixed">
            <div className="sidebar-logo w-100">
                <Link to="/">
                    <img src={logo} alt="" className="w-50" />
                </Link>
            </div>
            <div className="sidebar_controller">
                <Nav className="sidebar_menu d-flex flex-column align-items-start justify-content-evenly"
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item onClick={() => setSidebar('Order')}>
                        <a className={`nav-link ${sidebar === 'Order' && 'text-success'}`} href="/#service"><FontAwesomeIcon icon={faShoppingCart} /> Order</a>
                    </Nav.Item>
                    <Nav.Item onClick={() => setSidebar('Order List')} >
                        <Link className={`nav-link ${sidebar === 'Order List' && 'text-success'}`} to={`${url}`}><FontAwesomeIcon icon={faClipboardList} /> Order List</Link>
                    </Nav.Item>
                    <Nav.Item onClick={() => setSidebar('Review')}>
                        <Link className={`nav-link ${sidebar === 'Review' && 'text-success'}`} to={`${url}/review`}><FontAwesomeIcon icon={faCommentDots} /> Reviews</Link>
                    </Nav.Item>
                    {
                        admin &&
                        <>
                            <Nav.Item onClick={() => setSidebar('Service List')}>
                                <Link className={`nav-link ${sidebar === 'Service List' && 'text-success'}`} to={`${url}/serviceList`} ><FontAwesomeIcon icon={faClipboardCheck} /> Service List</Link>
                            </Nav.Item>
                            <Nav.Item onClick={() => setSidebar('Add Service')}>
                                <Link className={`nav-link ${sidebar === 'Add Service' && 'text-success'}`} to={`${url}/addService`} ><FontAwesomeIcon icon={faPlus} /> Add Service</Link>
                            </Nav.Item>
                            <Nav.Item onClick={() => setSidebar('Make Admin')}>
                                <Link className={`nav-link ${sidebar === 'Make Admin' && 'text-success'}`} to={`${url}/makeAdmin`}  ><FontAwesomeIcon icon={faUserPlus} /> Make Admin </Link>
                            </Nav.Item>
                        </>
                    }
                </Nav>
                <div className="auth_controller " >
                    <Button className="bg-master" onClick={handleLogOut}>Logout</Button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;