import { faCalendar, faCog, faFileAlt, faGripHorizontal, faSignOutAlt, faUserFriends, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Spinner } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'
import { firebaseInitializationFramwork, signOutUser } from '../../Login/Login/manageLogin';

const Sidebar = () => {
    const [isDoctor, setIsDoctor] = useState(false);
    const [existingUser, setExistingUser] = useContext(UserContext)
    
    const history = useHistory()

    firebaseInitializationFramwork();
    const handleSignout = () => {
        signOutUser()
            .then(() => {
                history.push('/')
            })
    }

    useEffect(() => {
        fetch('https://doctors-portal-server2-ph.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: existingUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [isDoctor])

    return (
        <div className="sidebar   col-md-2 p-5" style={{ height: '100vh' }}>
            <div className="fixed d-flex flex-column justify-content-between" style={{ height: '70vh' }}>
                <ul className="list-unstyled " >
                    <li>
                        <Link to="/dashboard" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                        </Link>
                    </li>

                    {
                        isDoctor &&
                        <>
                            <li>
                                <Link to="/dashboard/appointment" className="text-white">
                                    <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/patients" className="text-white">
                                    <FontAwesomeIcon icon={faUserFriends} /> <span>Patients</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/doctor" className="text-white">
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/prescriptions" className="text-white">
                                    <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/settings" className="text-white">
                                    <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                                </Link>
                            </li>
                        </>

                    }
                </ul>
                <div>
                    <h6 onClick={()=>history.push('/')}>{existingUser.name}</h6>
                </div>
                <div>
                    <Button onClick={handleSignout} style={{ background: 'transparent', outline: 'none', border: '0' }} className="text-white">
                        <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;