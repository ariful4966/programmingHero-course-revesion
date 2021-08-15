import { faCalendar, faCog, faFileAlt, faGripHorizontal, faSignOutAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
       <div className="sidebar d-flex flex-column justify-content-between col-md-2 p-5" style={{height:'100vh'}}>
           <ul className="list-unstyled">
               <li>
                   <Link to="/dashboard/dashboard" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal}/> <span>Dashboard</span>
                   </Link>
               </li>
               <li>
                   <Link to="/dashboard/appointment" className="text-white">
                    <FontAwesomeIcon icon={faCalendar}/> <span>Appointment</span>
                   </Link>
               </li>
               <li>
                   <Link to="/dashboard/patients" className="text-white">
                    <FontAwesomeIcon icon={faUserFriends}/> <span>Patients</span>
                   </Link>
               </li>
               <li>
                   <Link to="/dashboard/prescriptions" className="text-white">
                    <FontAwesomeIcon icon={faFileAlt}/> <span>Prescriptions</span>
                   </Link>
               </li>
               <li>
                   <Link to="/dashboard/settings" className="text-white">
                    <FontAwesomeIcon icon={faCog}/> <span>Settings</span>
                   </Link>
               </li>
           </ul>
           <div>
               <Link to="/" className="text-white">
                <FontAwesomeIcon icon={faSignOutAlt}/> <span>Logout</span>
               </Link>
           </div>
       </div>
    );
};

export default Sidebar;