import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CoursesDetails = ({ courses }) => {
    let { crId } = useParams();
    const course = courses.find(cor => cor.id == crId);


    if (!course) {
        return <h1>Loading.....</h1>
    }
    if (course) {
        const { name, picture, title, body, price } = course
        return (
            <Container>

                <div className="course-detail">
                    <h1>{name}</h1>
                    <Row>
                        <Col md={8}>
                            <img src={picture} alt="" />
                        </Col>
                        <Col md={4}>
                            <h2>{title}</h2>
                            <p>{body}</p>
                            <p>Course Price: ${price}</p>
                        </Col>
                    </Row>
                </div>
            </Container>)
    }

};

export default CoursesDetails;