import axios from 'axios';
import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { allRegistations } from '../../../redux/actions';
import './EventTask.css'
import SingleEvent from '../../partials/SingleEvent/SingleEvent';
import Header from '../../partials/Header/Header';

const EventTask = ({ allRegistations, registations, user }) => {


    useEffect(() => {

        axios.get('https://volunteer-network-server82.herokuapp.com/registation?email=' + user.email,
            {
                headers: {
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then(response => {
                allRegistations(response.data);
            })
            .catch((error) => {
                console.log('error ' + error);
            });

    }, [user]);

    const eventDelete = id => {
        // const selectedEvent = registations.find(event => event._id === id);
        axios.delete(`https://volunteer-network-server82.herokuapp.com/events/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {

                    alert('Delete Item is Successfully')

                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <>
            <Header />
            < div className="eventTask_area" >
                <Container>
                    <Row>
                        {registations.length === 0 ? <h1>There is No Event</h1> :
                            registations.map(event => <SingleEvent key={event._id} event={event} eventDelete={eventDelete}></SingleEvent>)
                        }
                    </Row>
                </Container>
            </div >
        </>
    )



};

const mapStateToProps = state => {
    return state
}
const mapDispatchToProps = {
    allRegistations
}
export default connect(mapStateToProps, mapDispatchToProps)(EventTask);