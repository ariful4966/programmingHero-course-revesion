import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const SingleEvent = ({ event, eventDelete }) => {

    

    return (
        <Col md={6} className="my-3 singleEvent">
            <Card className=" mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={event.img && event.img} className="img-fluid rounded-start" alt="Event Picture" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{event.organization}</h5>
                            <p className="card-text">{new Date(event.date).toDateString()}</p>
                            <Button className="event-btn" variant="danger" onClick={()=>eventDelete(`${event._id}`)}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </Card>
        </Col>
    )

};
export default SingleEvent;