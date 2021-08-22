import React from 'react';
import { Container, Row } from 'react-bootstrap';
import graphic from '../../../images/icons/service2.png';
import mobile from '../../../images/icons/service1.png';
import web from '../../../images/icons/service3.png';
import ServiceCard from '../ServiceCard/ServiceCard';
const serviceData = [
    {
        name: 'Web & Mobile design',
        body: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        icon: mobile
    },
    {
        name: 'Graphic design',
        body: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        icon: graphic
    },
    {
        name: 'Web development',
        body: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        icon: web
    },
]

const Services = () => {
    return (
        <section className="service_area my-5">
            <div className="section-heading text-center mb-5">
                <h3>Provide Awesome <span className="text_brand">Service</span></h3>
            </div>
            <Container>
                <Row>

                    {
                        serviceData.map((service, idx) => <ServiceCard service={service} key={idx} />)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Services;