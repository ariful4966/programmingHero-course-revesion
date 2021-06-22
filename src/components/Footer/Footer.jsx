import { Container, Grid } from '@material-ui/core';
import React from 'react';
import logo from '../../images/logo.png';
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer_area section-padding">
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        <img src={logo} alt="" />
                    </Grid>
                    <Grid item md={3}>
                        <ul>
                            <li>About Online food</li>
                            <li>Read Our blog</li>
                            <li>Sign up to deliver</li>
                            <li>Add Your restaurant</li>
                        </ul>
                    </Grid>
                    <Grid item md={3}>
                        <ul>
                            <li>Get help</li>
                            <li>Read FAQs</li>
                            <li>View All cities</li>
                            <li>Restaurants near me</li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;