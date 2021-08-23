import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Review = () => {
    return (
        <div className="review_area p-5">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCompany">
                    <Form.Control type="text" placeholder="Company Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDesignaton">
                    <Form.Control type="text" placeholder="Designation" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control as="textarea" placeholder="Description" style={{height:'200px'}}/>
                </Form.Group>
                <Button className="bg-master" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Review;