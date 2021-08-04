import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import EventAdd from '../../partials/EventAdd/EventAdd';
import Sidebar from '../../partials/Sidebar/Sidebar';
import VolunteerList from '../../partials/VolunteerList/VolunteerList';
import './Volunteers.css'

const Volunteers = ({sidebar}) => {
    return (
        <div className="volunteers_area">
            <Row>
                <Col md={3} className="volunteer_sidebar">
                    <Sidebar />
                </Col>
                <Col md={9} className="volunteer_content">
                    {
                        sidebar === 'volunteer'&& <VolunteerList></VolunteerList> 
                    }
                    {
                        sidebar === 'addEvent' && <EventAdd/>
                    }
                </Col>
            </Row>
        </div>
    );
};
const mapStateToProps = state=>{
    return state
}

export default connect(mapStateToProps)(Volunteers);