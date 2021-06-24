import { Container, Grid } from '@material-ui/core';
import React from 'react';
import MapContainer from '../GoogleMap/GoogleMap';
import ShippingPrograss from '../ShippingPrograss/ShippingPrograss';
import './LocationOrder.scss'

const LocationOrder = () => {
    return (
        <div className="location_area section-padding">
            <Container>
                <Grid container spacing={5}>
                    <Grid item md={8}>
                        <div className="google_map" >
                            <MapContainer />
                        </div>
                    </Grid>
                    <Grid item md={4}>
                        <ShippingPrograss/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default LocationOrder;