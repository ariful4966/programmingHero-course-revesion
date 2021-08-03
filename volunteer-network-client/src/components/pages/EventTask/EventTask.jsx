import axios from 'axios';
import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { allRegistations } from '../../../redux/actions';
import './EventTask.css'
import SingleEvent from '../../partials/SingleEvent/SingleEvent';

const EventTask = ({ allRegistations, registations }) => {

    useEffect(() => {
        axios.get('http://localhost:2400/registation')
            .then(res => {
                allRegistations(res.data)
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    const eventDelete = id => {
        // const selectedEvent = registations.find(event => event._id === id);
        axios.delete(`http://localhost:2400/events/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    axios.get('http://localhost:2400/registation')
                        .then(res => {
                            allRegistations(res.data)
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    console.log(registations);

    return (
        < div className="eventTask_area" >
            <Container>
                <Row>
                    {   registations.length === 0 ? <h1>There is No Event</h1> :
                        registations.map(event => <SingleEvent key={event._id} event={event} eventDelete={eventDelete}></SingleEvent>)
                    }
                </Row>
            </Container>
        </div >
    )



};

const mapStateToProps = state => {
    return state
}
const mapDispatchToProps = {
    allRegistations
}
export default connect(mapStateToProps, mapDispatchToProps)(EventTask);