import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
const slideItems = [
    slack, google, uber, netflix, airbnb
]

const Brand = () => {
    return (
        <section className="brand_area py-5">
            <Container>
                <div className="brand-logos d-flex align-items-center justify-content-center w-100">
                    {
                        slideItems.map((item, idx) =>
                            <div className="brand-logo-item mx-3" key={idx}>
                                <img src={item} alt="" className="w-100" style={{height:'75px'}}/>
                            </div>
                        )
                    }
                </div>
            </Container>
        </section>
    );
};

export default Brand;