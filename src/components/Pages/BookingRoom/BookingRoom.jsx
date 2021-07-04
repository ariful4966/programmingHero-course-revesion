import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import './BookingRoom.scss';

import Header from '../../Pertials/Header/Header';
import PlaceMap from '../../Pertials/PlaceMap/PlaceMap';
import RoomCard from '../../Pertials/RoomCard/RoomCard';


const BookingRoom = (props) => {
    const { id, title,  places } = props.dataFilter;
    console.log(props);
    return (
        <div>
            <Header />
            <Container className="bookingRoom_page">
                <Grid container>
                    <Grid md={8}>
                        <Typography variant="h5">Stay in {title}</Typography>
                        {
                            places.map(pl => <RoomCard key={pl.id} pl={pl}></RoomCard>)
                        }
                    </Grid>
                    <Grid md={4}>
                        <PlaceMap />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        ...state.bookingReducer
    }
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BookingRoom);