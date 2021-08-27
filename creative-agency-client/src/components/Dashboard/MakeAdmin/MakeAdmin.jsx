import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({
        email: ''
    });

    const handleAdminBlur = e => {
        const newAdmin = {
            ...admin
        };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin)
    }
    const handleAdminSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/admin', admin)
        .then(data=>{
            alert(data.data)
        })

    }
    return (
        <div className="makeAdmin_area p-5">
            <div className="makeAdmin_area_form bg-light p-5">
                <Form onSubmit={handleAdminSubmit}>
                    <Row className="align-items-center">
                        <Col className="my-1">
                            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                Email
                            </Form.Label>
                            <Form.Control type="email" id="inlineFormInputName" placeholder="Jane Doe" name="email" onBlur={handleAdminBlur} />
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