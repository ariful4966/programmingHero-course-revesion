import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card">
                <div className="card-body">
                    <p className="card-text text-center">{testimonial.quote}</p>
                </div>
                <div className=" d-flex align-items-center p-4">
                        <img src={testimonial.photo} className="w-15 me-3" alt="" />
                        <div className="cart-name">
                            <h5 className="text-primary">{testimonial.name}</h5>
                            <p >{testimonial.from}</p>
                        </div>
                </div>
            </div>
        </div>

    );
};

export default TestimonialCard;