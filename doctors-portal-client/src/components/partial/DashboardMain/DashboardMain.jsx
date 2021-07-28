import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

const DashboardMain = (props) => {
    const { appoinments, patients } = props
    const today = new Date().toLocaleDateString('en-US');
    const todayAppoinment = appoinments.filter(ap => ap.date === today);
    const pandingAppoinment = patients.filter(pt=>pt.prescription !=='')
    
    return (
        <div className="main_bashboard_area">
            <div className="dashboard_heading">
                <Container>
                    <Grid container spacing={4}>
                        <Grid item md={3}>
                            <div className="single_dashboarHeading bg_01">
                                <div className="count_petient">
                                    <Typography variant="h4">{pandingAppoinment.length}</Typography>
                                </div>
                                <div className="petient_reson">
                                    <Typography variant="body1">Pending</Typography>
                                    <Typography variant="body1">Apoinment</Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className="single_dashboarHeading bg_02">
                                <div className="count_petient">
                                    <Typography variant="h4">{todayAppoinment.length}</Typography>
                                </div>
                                <div className="petient_reson">
                                    <Typography variant="body1">Today's</Typography>
                                    <Typography variant="body1">Apoinment</Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className="single_dashboarHeading bg_03">
                                <div className="count_petient">
                                    <Typography variant="h4">{appoinments.length}</Typography>
                                </div>
                                <div className="petient_reson">
                                    <Typography variant="body1">Total</Typography>
                                    <Typography variant="body1">Apoinment</Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className="single_dashboarHeading bg_04">
                                <div className="count_petient">
                                    <Typography variant="h4">{patients.length}</Typography>
                                </div>
                                <div className="petient_reson">
                                    <Typography variant="body1">Total</Typography>
                                    <Typography variant="body1">Patients</Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(DashboardMain);