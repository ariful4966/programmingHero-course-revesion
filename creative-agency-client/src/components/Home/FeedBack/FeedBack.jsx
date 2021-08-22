import React from 'react';
import { Container, Row } from 'react-bootstrap';
import customer from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import FeedBackCard from '../FeedBackCard/FeedBackCard';
const serviceData = [
    {
        name: 'Nash Patrik',
        position:'CEO',
        company:'Manpol',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        photo: customer
    },
    {
        name: 'Miriam Barron',
        position:'CEO',
        company:'Manpol',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        photo: customer2
    },
    {
        name: 'Bria Malone',
        position:'CEO',
        company:'Manpol',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        photo: customer3
    },
]

const FeedBack = () => {
    return (
        <section className="feedback_area my-5">
            <div className="section-heading text-center mb-5">
                <h3>Clients <span className="text_brand">Feedback</span></h3>
            </div>
            <Container>
                <Row>

                    {
                        serviceData.map((feedback, idx) => <FeedBackCard feedback={feedback} key={idx} />)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default FeedBack;