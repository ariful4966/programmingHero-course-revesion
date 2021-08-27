import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';



const ServiceCard = ({ service }) => {
    const history = useHistory();
    const handleOrder = id => {
        history.push(`/dashboard/order/${id}`)
    }
    return (
        <Col lg={4} md={6} >
            <Card className="w-100 h-100 border-0 text-center p-4" onClick={() => handleOrder(service._id)}>
                <Card.Img variant="top" className="w-25 mx-auto" src={service.icon} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>
                        {service.body}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceCard;