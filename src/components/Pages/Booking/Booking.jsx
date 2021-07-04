import { Container, Typography, Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Booking.scss'
import Header from '../../Pertials/Header/Header';
import BookingForm from '../../Pertials/BookingForm/BookingForm';

const Booking = (props) => {
    // let { bkId } = useParams();
    const { dataFilter } = props;
    console.log(props);
    return (
        <div className="booking bg-banner">
            <Header bgWhit />
            <Container>
                <Grid container>
                    <Grid item md="6">
                        <div className="filterInfo page_area">
                            <Typography variant="h2">{dataFilter.title}</Typography>
                            <Typography paragraph={true}>{dataFilter.body.slice(0, 500)}</Typography>
                        </div>
                    </Grid>
                        <Grid item md="6">
                            <div className="booking-form">
                                <BookingForm/>
                            </div>
                        </Grid>
                    </Grid>
            </Container>
        </div>
            );
};

const mapStateToProps = (state) => {
    return {...state.bookingReducer}
}

            const mapDispatchToProps = {

            }

            export default connect(mapStateToProps, mapDispatchToProps)(Booking);