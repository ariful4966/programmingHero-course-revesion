import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import './Slider.css'

const Slider = ({ courses, handleEnrollCourse }) => {
    return (
        <Carousel fade>
            {
                courses.map(slide => (
                    <Carousel.Item key={slide.id}>
                        <Container>
                            <Row>
                                <Col md={8}>
                                    <div className="slide-content">
                                        <div>
                                            <h1>{slide.name}</h1>
                                            <h4>{slide.title}</h4>
                                            <p>{slide.body}</p>
                                            <h2>Course Price: ${slide.price}</h2>
                                            <Button onClick={()=>handleEnrollCourse(slide)}>Enroll Now</Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <img
                                        src={slide.picture}
                                        alt="First slide"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                ))
            }

        </Carousel>
    );
};

export default Slider;