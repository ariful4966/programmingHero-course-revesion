import axios from 'axios';
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import EventAdd from '../../partials/EventAdd/EventAdd';
import Sidebar from '../../partials/Sidebar/Sidebar';
import VolunteerList from '../../partials/VolunteerList/VolunteerList';
import { allRegistations } from '../../../redux/actions';
import './Volunteers.css'

const Volunteers = ({sidebar, user, allRegistations, registations}) => {

    useEffect(() => {
        axios.get('http://localhost:2400/registations?email=' + user.email, {
            headers: {
                authorization: `Bearer ${sessionStorage.getItem('token')}`,
                isAdmin: user.isAdmin
            }
        })
            .then(res => {
                allRegistations(res.data);
            })
    }, [registations]);

    

    return (
        <div className="volunteers_area">
            <Row>
                <Col md={3} className="volunteer_sidebar">
                    <Sidebar />
                </Col>
                <Col md={9} className="volunteer_content">
                    {
                        sidebar === 'volunteer'&& <VolunteerList registations={registations}></VolunteerList> 
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
const mapDispatchToProps = {
    allRegistations
}

export default connect(mapStateToProps, mapDispatchToProps)(Volunteers);