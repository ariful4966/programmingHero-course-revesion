import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import slide1 from '../../../images/carousel-1.png';
import slide2 from '../../../images/carousel-2.png';
import slide3 from '../../../images/carousel-3.png';
import slide4 from '../../../images/carousel-4.png';
import slide5 from '../../../images/carousel-5.png';
import Slider from '../Slider/Slider';
// import Slider2 from '../Slider/Slider2';
const slideData = [
    slide1, slide2, slide3, slide4, slide5
];

const Works = () => {
    return (
        <section className="work_area py-5 bg-master">
            <div className="section-heading text-center mb-5">
                <h3>Here are some of <span className="text_brand">our works</span></h3>
            </div>

            <Slider slides={slideData} />

        </section>
    );
};

export default Works;