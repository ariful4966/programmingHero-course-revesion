import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const OrderList = () => {
    const user = useSelector(state => state.user)
    const [submitOrder, setSubmitOrder] = useState([]);
    const orderFilter = submitOrder.filter(order => order.email === user.email)
    useEffect(() => {

        axios.get('https://creative-agency-server82.herokuapp.com/order?email=' + user.email)
            .then(data => {
                setSubmitOrder(data.data)
            })
    }, [setSubmitOrder, user])
    return (
        <div className="orderList_area p-5" >
            <Row>
                {
                    orderFilter.map((service, idx) =>
                        <Col md={6} className="mb-4" key={idx}>
                            <Card className="w-100 p-5">
                                <Card.Header className="d-flex justify-content-between">
                                    <Card.Img variant="top" src={service.icon} className="w-25" />
                                    <div>
                                        <div className={
                                            `${(service.status === 'Pending' && 'bg-danger') ||
                                             (service.status === 'Ongoing' && 'bg-warning') ||
                                              (service.status === 'Done' && 'bg-success')}
                                               text-center text-white `} style={{ width: '100px' }}>{service.status}</div>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>{service.design}</Card.Title>
                                    <Card.Text>
                                        {service.description}
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