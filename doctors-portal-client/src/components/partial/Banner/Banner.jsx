import { Button, Container, Grid, Typography } from '@material-ui/core';
import dentalChear from '../../../images/Mask Group 1.png';

import './Banner.scss'
import BannerCalender from './BannerCalender';
import BannerInfo from './BannerInfo';

const Banner = ({ appoin}) => {
    return (
        <div className="banner_area">
            <Container>
                <Grid container spacing={6}>
                    <Grid item md={6}>
                        {
                            appoin? <BannerCalender/>: <BannerInfo/>
                        }
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