import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const AddService = () => {
    return (
        <div className="addService_area p-5">
            <div className="addService_form bg-light p-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Row>
                            <Col>
                            <Form.Label>Service Title</Form.Label>
                                <Form.Control type="text" placeholder="Service title" name="name" />
                            </Col>
                            <Col>
                            <Form.Label>Icon</Form.Label>
                                <Form.Control type="file" placeholder="Last name" name="icon" />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Description" style={{height:'200px'}} />
                    </Form.Group>
                    <Button className="bg-master" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddService;