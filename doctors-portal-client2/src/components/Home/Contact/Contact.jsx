import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './Contact.css'

const Contact = () => {
    return (
        <section className="section-container make-appointment contact py-5" id="contact">
            <div className="container">
                <div className="section-header text-white text-center">
                    <h5 style={{ color: '#1CC7C1', textTransform: 'uppercase' }}>Contact</h5>
                    <h2>Always Connect with us</h2>
                </div>
                <div className="row  my-5">
                   <ContactForm/>
                </div>
            </div>
        </section>
    );
};

export default Contact;