import { Button, Container, Grid, Typography } from '@material-ui/core';
import dentalChear from '../../../images/Mask Group 1.png';

import './Banner.scss'

const Banner = () => {
    return (
        <div className="banner_area">
            <Container>
                <Grid container spacing={6}>
                    <Grid item md={6}>
                        <div className="banner_info">
                            <Typography variant="h2"  >Your New Smile Stater Here</Typography>
                            <Typography paragraph={true}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquid minus exercitationem dicta, numquam aperiam hic tempora, quas magnam ullam harum id dolores vitae consequuntur voluptatibus praesentium? Porro, quia cupiditate?</Typography>
                            <Button variant="contained" id="gradient_btn">Get Apoinment</Button>
                        </div>
                    </Grid>
                    <Grid item md={6} className="banner_img">
                        <img src={dentalChear} alt="Dental Chear" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;