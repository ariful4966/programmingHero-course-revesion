import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
const axios = require('axios')

const NetworkCategory = () => {
    const [categoris, setCategoris] = useState([])

    useEffect(() => {
        axios.get('http://localhost:2400/')
            .then(res => {
                setCategoris(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    console.log(categoris);
    return (
        <div>
            <Container>
                <Row>
                    {
                        categoris.map(ct =>
                            <Col md={3} key={ct._id}>
                                <Card>
                                    <Card.Img variant="top" src={ct.img} />
                                    <Card.Body>
                                        <Card.Title>{ct.name}</Card.Title>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card></Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default NetworkCategory;