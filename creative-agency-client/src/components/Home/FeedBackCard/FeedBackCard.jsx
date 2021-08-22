import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './FeedBackCard.css'

const FeedBackCard = ({feedback}) => {
    return (
        <Col md={4}>
            <Card className=" shadow p-3">
                <Card.Header className="d-flex align-items-center justify-content-evenly">
                    <Card.Img  src={feedback.photo} className="w-25" />
                    <div className="title">
                        <h4>{feedback.name}</h4>
                        <h6><span>{feedback.position}</span>, <span>{feedback.company}</span></h6>
                    </div>
                </Card.Header>
                <Card.Body>
                    <p>{feedback.body}</p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default FeedBackCard;