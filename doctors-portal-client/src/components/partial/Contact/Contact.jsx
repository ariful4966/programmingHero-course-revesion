import { Container, Typography } from '@material-ui/core';
import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './Contact.scss'

const Contact = () => {
    return (
        <div className="conatct_area" id="contact">
            <Container>
                <div className="section_heading">
                    <Typography variant='h5' className="heading_top">Contact Us</Typography>
                    <Typography variant='h3' className="main_heading">Always Connect With You</Typography>
                </div>
                <div className="contact_form_area">
                    <ContactForm/>
                </div>
            </Container>
        </div>
    );
};

export default Contact;