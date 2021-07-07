import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import star from '../../../placeData/Icon/star_1_.png';
import './RoomCard.scss';

const RoomCard = (props) => {
    const { id, title, body, photo, room, rating, price } = props.pl
    return (
        <Grid container>
            <Grid item md={6}>
                <div className="roomImg">
                    <img src={photo} alt="" />
                </div>
            </Grid>
            <Grid item md={6}>
                <div className="roomDetail">
                    <Typography variant='h5'>{title}</Typography>
                    <div>
                        <Box>
                            <span>{room.gaust} Gaust</span>
                            <span>{room.bedroom} Bedrooms</span>
                            <span>{room.bed} Beds</span>
                            <span>{room.bath} Baths</span>
                        </Box>
                    </div>
                    <Typography paragraph="true">{body.slice(0, 100)}</Typography>
                    <div >
                        <div className="star">
                            <img src={star} alt="" />
                            <span>{rating.star}</span>
                            <span>({rating.person})</span>
                        </div>
                        <div className="price">
                            <strong>${price}</strong>/ night
                        </div>
                    </div>
                </div>

            </Grid>
        </Grid>
    );
};

export default RoomCard;