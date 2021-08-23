import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const MakeAdmin = () => {
    return (
        <div className="makeAdmin_area p-5">
            <div className="makeAdmin_area_form bg-light p-5">
                <Form>
                    <Row className="align-items-center">
                        <Col  className="my-1">
                            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                Email
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button variant="success" type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
};

export default MakeAdmin;