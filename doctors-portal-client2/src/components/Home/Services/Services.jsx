import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride,
        desciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quos blanditiis, quisquam ad non tempora. Dolore aut perferendis corporis vero?'
    },
    {
        name: 'Cavity Filling',
        img: cavity,
        desciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quos blanditiis, quisquam ad non tempora. Dolore aut perferendis corporis vero?'
    },
    {
        name: 'Teeth Whitening',
        img: whitening,
        desciption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quos blanditiis, quisquam ad non tempora. Dolore aut perferendis corporis vero?'
    }
];
const Services = () => {
    return (
        <section className="serces-container my-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1', textTransform:'uppercase' }}>Our Services</h5>
                <h2>Services We Provide</h2>
            </div>
            <section className="d-flex justify-content-center">
                <div className="w-75 row py-5">
                    {
                        serviceData.map((service, index) => <ServiceDetail key={index} service={service}/>)
                    }
                </div>
            </section>
        </section>
    );
};

export default Services;