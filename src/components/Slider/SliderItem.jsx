import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

const SliderItem = (props) => {
    const { picture } = props.slide
    return (
        <Carousel.Item>
            <img
                className="d-block w-100 h-100"
                src={picture}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
};

export default SliderItem;