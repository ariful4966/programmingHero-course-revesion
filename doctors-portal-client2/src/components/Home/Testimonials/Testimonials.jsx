import React from 'react';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const testimonialData = [
    {
        quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis natus voluptates voluptate exercitationem. Quidem cupiditate sed aperiam dignissimos repellat dicta!',
        name: 'Wilsone Herry',
        from: 'Alaska',
        photo: wilson,
    },
    {
        quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis natus voluptates voluptate exercitationem. Quidem cupiditate sed aperiam dignissimos repellat dicta!',
        name: 'Ema Gomez',
        from: 'Chicago',
        photo: ema,
    },
    {
        quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis natus voluptates voluptate exercitationem. Quidem cupiditate sed aperiam dignissimos repellat dicta!',
        name: 'Aliz Farari',
        from: 'Californial',
        photo: aliza,
    }
]

const Testimonials = () => {
    return (
        <section className="serces-container my-5">
            <div className="container">
                <div className="section-header">
                    <h5 style={{ color: '#1CC7C1', textTransform: 'uppercase' }}>Testimonial</h5>
                    <h2>What Our Patients Says</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                    {
                        testimonialData.map((testimonial, index)=><TestimonialCard key={index} testimonial={testimonial}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;