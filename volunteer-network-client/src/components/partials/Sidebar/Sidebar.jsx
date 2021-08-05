import { Button } from 'react-bootstrap';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import siteLogo from '../../../images/logo.png';
import { sidebarNav } from '../../../redux/actions';
import './Sidebar.css';
import plusIcon from '../../../images/plus 1.png';
import userIcon from '../../../images/users-alt 1.png';

const Sidebar = (props) => {
    const { sidebarNav } = props;
    return (
        <aside>
            <div className="sidebar-logo">
                <Link to="/"><img src={siteLogo} alt="" /></Link>
            </div>
            <nav>
                <Button variant="default" onClick={() => sidebarNav('volunteer')} >
                    <img src={userIcon} alt="" />
                    <span>Volunteer Register List</span>
                </Button>
                <Button variant="default" onClick={() => sidebarNav('addEvent')}>
                    <img src={plusIcon} alt="" />
                    <span>Add Event</span>
                </Button>
            </nav>
        </aside>
    );
};

const mapStateToProps = state => {
    return state
}
const mapDispatchToProps = {
    sidebarNav
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);