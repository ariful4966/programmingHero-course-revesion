import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CoursesDetails = ({ courses }) => {
    let { crId } = useParams();
    const course = courses.find(cor => cor.id == crId);
    //  const {name, picture} = course

    if (!course) {
        return <h1>Loading.....</h1>
    }
    if (course) {
        return (
        <Container>
            <Row>
                <div className="course-detail">
                    <h1>{course.name}</h1>
                    <Col md={6}>
                        <img src={course.picture} alt="" />
                    </Col>
                    <Col md={6}></Col>
                </div>
            </Row>
        </Container>)
    }

};

export default CoursesDetails;