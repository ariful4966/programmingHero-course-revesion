import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const OrderForm = ({ handleOrderBlur, handleOrderSubmit, order, handlePictureChange }) => {
    return (
        <div className="order-form p-5">
            <Form onSubmit={handleOrderSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Your Name / Company's Name" name="name" defaultValue={order.name} onBlur={handleOrderBlur} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email Address" name="email" defaultValue={order.email} onBlur={handleOrderBlur} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDesign">
                    <Form.Control type="text" placeholder="Design Type" name="design" defaultValue={order.design} onBlur={handleOrderBlur} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTextarea">
                    <Form.Control as="textarea" style={{ height: '200px' }} placeholder="Leave a comment here" name="description" onBlur={handleOrderBlur} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Price" name="price" defaultValue={order.price} onBlur={handleOrderBlur} />
                        </Col>
                        <Col>
                            <Form.Control type="file" placeholder="Last name" onChange={handlePictureChange} />
                        </Col>
                    </Row>
                </Form.Group>
                <Button className="bg-master" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default OrderForm;