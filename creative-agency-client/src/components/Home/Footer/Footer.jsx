import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="yalow-bg py-5">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="footer_content">
                            <h1>Let us handle your project, professionally.</h1>
                            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="footer_form">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
                                    <Form.Control style={{ height: '200px' }} as="textarea" placeholder="Leave a comment here" />
                                </FloatingLabel>
                                <Button className="bg-master" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>

            </Container>
            <div className="footer_bottom pt-5">
                <p className="text-center">&copy;copyright Orange labs {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;