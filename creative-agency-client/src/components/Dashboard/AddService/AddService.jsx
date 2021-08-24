
import env from 'react-dotenv'
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const AddService = () => {
    const [icon, setIcon] = useState(null)
    const [service, setService] = useState({
        name: '',
        body: ''
    });
    const handleService = (e) => {
        const newService = {
            ...service
        };
        newService[e.target.name] = e.target.value;
        setService(newService)
    }

    // image Handling
    const handleIcon = e => {
        uploadIcon(e.target.files[0])
            .then(data => {
                setIcon(data.data.data.display_url);

            })
    }


    const uploadIcon = (img) => {
        let image = new FormData()
        image.set('key', '9519a86f55d224381c6e2b5e13379f75')
        image.append('image', img)

        return axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: image
        })
    }
    // Submit the Data to Database
    const handleSubmit = event => {
        event.preventDefault();
        service.icon = icon

        fetch('http://localhost:5000/service', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(isPost => {
                alert('Your Service Post on Server successfully')
            })

    }
    return (
        <div className="addService_area p-5">
            <div className="addService_form bg-light p-5">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Row>
                            <Col>
                                <Form.Label>Service Title</Form.Label>
                                <Form.Control type="text" placeholder="Service title" name="name" onBlur={handleService} />
                            </Col>
                            <Col>
                                <Form.Label>Icon</Form.Label>
                                <Form.Control type="file" placeholder="Last name" name="icon" onBlur={handleIcon} />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Description" name="body" style={{ height: '200px' }} onBlur={handleService} />
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