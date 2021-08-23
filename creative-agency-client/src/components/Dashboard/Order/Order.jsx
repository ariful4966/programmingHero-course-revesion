import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Order = () => {
    return (
        <div className="order-form p-5">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Your Name / Company's Name" name="company"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email Address" name="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDesign">
                    <Form.Control type="text" placeholder="Design Type" name="design"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTextarea">
                    <Form.Control as="textarea" style={{ height: '200px' }} placeholder="Leave a comment here" name="comment"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Price" name="price"/>
                        </Col>
                        <Col>
                            <Form.Control type="file" placeholder="Last name"  name="picture"/>
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

export default Order;