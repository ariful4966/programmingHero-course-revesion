import { Button, Container, Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import dentalChear from '../../../images/Mask Group 1.png';

import { categoryByDate } from '../../../redux/action/action'
import BannerCalender from './BannerCalender';
import BannerInfo from './BannerInfo';
import './Banner.scss'


const Banner = (props) => {
    const { appoin } = props;
    return (
        <div className="banner_area">
            <Container>
                <Grid container spacing={6}>
                    <Grid item md={6}>
                        {
                            appoin ? <BannerCalender /> : <BannerInfo />
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
const mapStateToProps = state => {
    return state
}
const mapDispachToProps = {
    categoryByDate
}

export default connect(mapStateToProps, mapDispachToProps)(Banner);