import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import mobile from '../../../images/icons/service1.png';
import graphic from '../../../images/icons/service2.png';

const orderService = [
    {
        name: 'Web & Mobile design',
        body: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        icon: mobile,
        status: 'Pending'
    },
    {
        name: 'Graphic design',
        body: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        icon: graphic,
        status: 'Done'
    },
]

const OrderList = () => {
    return (
        <div className="orderList_area p-5" >
            <Row>
                {
                    orderService.map((service, idx) =>
                        <Col md={6}>
                            <Card className="w-100 p-5">
                                <Card.Header className="d-flex justify-content-between">
                                    <Card.Img variant="top" src={service.icon} className="w-25" />
                                    <div>
                                        <Button className=''>{service.status}</Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>
                                        {service.body}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default OrderList;