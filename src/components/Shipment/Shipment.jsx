import { Container, Grid } from '@material-ui/core';
import './Shipment.scss';

import ShipmentForm from '../ShipmentForm/ShipmentForm';
import Calculation from '../Calculation/Calculation';

const Shipment = () => {
    
    return (
        <div className="shipment_area section-padding">
            <Container>
               <Grid container spacing={2}>
                    <Grid item md={4}>
                        <div className="shiping_info">
                            <h2>Edit Your Delivary Information</h2>
                            <hr />
                        <ShipmentForm/>
                        </div>
                    </Grid>
                    <Grid item md={4}></Grid>
                    <Grid item md={4}>
                        <Calculation/>
                    </Grid>
               </Grid>
            </Container>
        </div>
    );
};

export default Shipment;