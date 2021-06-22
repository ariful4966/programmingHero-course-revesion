import { Container, Grid } from '@material-ui/core';
import React from 'react';
import ShipmentForm from './ShipmentForm/ShipmentForm';

const Shipment = () => {
    return (
        <div className="shipment_area section-padding">
            <Container>
               <Grid container spacing={2}>
                    <Grid item md={4}>
                        <ShipmentForm/>
                    </Grid>
                    <Grid item md={4}></Grid>
                    <Grid item md={4}>

                    </Grid>
               </Grid>
            </Container>
        </div>
    );
};

export default Shipment;