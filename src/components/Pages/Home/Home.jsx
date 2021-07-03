import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { addToBook } from '../../../redux/actions/bookingActions';
import Header from '../../Pertials/Header/Header';
import Slider from '../../Pertials/Slider/Slider';

const Home = () => {
    return (
        <div className="home bg-banner">
            <Header bgWhit />
            <section className="page_area">
                <Container>
                    <Slider />
                </Container>
            </section>
        </div>
    );
};




export default Home;