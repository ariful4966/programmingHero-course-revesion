import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const RoomCard = (props) => {
    const { id, title, body, photo } = props.pl
    return (
        <Grid container>
            <Grid item md={6}> img</Grid>
            <Grid item md={6}> 
                <Typography variant='h5'>{title}</Typography>
                <Typography paragraph="true">{body.slice(0, 50)}</Typography>
            </Grid>
        </Grid>
    );
};

export default RoomCard;