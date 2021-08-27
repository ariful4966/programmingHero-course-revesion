import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';
import { connect } from 'react-redux';

const Services = ({ services }) => {
    return (
        <section className="service_area my-5" id="service">
            <div className="section-heading text-center mb-5">
                <h3>Provide Awesome <span className="text_brand">Service</span></h3>
            </div>
            <Container>
                <Row>

                    {
                        services.length === 0 ? <Spinner animation="border" variant="success" /> :
                            services.map((service) => <ServiceCard service={service} key={service._id} />)
                    }
                </Row>
            </Container>
        </section>
    );
};

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(Services);