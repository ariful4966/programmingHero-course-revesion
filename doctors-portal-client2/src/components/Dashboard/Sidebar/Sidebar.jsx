import { faCalendar, faCog, faFileAlt, faGripHorizontal, faSignOutAlt, faUserFriends, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {
    const [existingUser, setExistingUser] = useContext(UserContext)
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: existingUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [isDoctor])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 p-5" style={{ height: '100vh' }}>
            <ul className="list-unstyled">
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
                <h6>{existingUser.name}</h6>
            </div>
            <div>
                <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;