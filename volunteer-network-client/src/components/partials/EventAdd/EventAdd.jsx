
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './EventAdd.css'
import axios from 'axios'
import { connect } from 'react-redux'

const EventAdd = ({ user }) => {
    const [event, setEvent] = useState({
        name: '',
        description: '',
        img: '',
        date: ''
    });
    const handleEventBlur = (e) => {
        const newuser = {
            ...event
        }
        newuser[e.target.name] = e.target.value
        setEvent(newuser)



    }

    // console.log(event);


    const handleSubmit = e => {
        e.preventDefault();

        axios.post("https://volunteer-network-server82.herokuapp.com/addEvent?email=" + user.email, event,
            {
                headers: {
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then(res => {
                if (res.data.acknowledged === true) {
                    alert('Successfully Post Event')
                    const postedEvent = {
                        name: '',
                        description: '',
                        img: '',
                        date: ''
                    }
                    setEvent(postedEvent)
                } else {
                    alert(res.data.message)
                }


            })
            .catch(err => console.log(err))
    }



    return (
        <div className="volunteer_sec_content">
            <div className="sec_header">
                <h1>Add Event</h1>
            </div>
            <article className="sec_content">
                <div className="event_form">
                    <Form className="row" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 col-md-6" controlId="formBasicName">
                            <Form.Label>Event Title</Form.Label>
                            <Form.Control type="text" placeholder="Event Title" name="name" onBlur={handleEventBlur} />
                        </Form.Group>

                        <Form.Group className="mb-3 col-md-6" controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" placeholder="Description" name="description" onBlur={handleEventBlur} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6" controlId="formBasicDate">
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control type="date" placeholder="Password" name="date" onBlur={handleEventBlur} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6" controlId="formBasicCheckbox">
                            <Form.Label>Banner</Form.Label>
                            <Form.Control type="text" name="img" onBlur={handleEventBlur} placeholder="Post The Image Link"></Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{ width: '100px' }}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </article>
        </div>
    );
};
const mapStateToPros = state => {
    return state
}

export default connect(mapStateToPros)(EventAdd);