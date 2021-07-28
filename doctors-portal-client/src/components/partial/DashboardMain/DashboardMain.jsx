import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';

const DashboardMain = ({appoinments}) => {
    const today = new Date().toLocaleDateString('en-US');
    const todayAppoinment = appoinments.filter(ap=> ap.date === today)
    return (
        <div className="main_bashboard_area">
           <div className="dashboard_heading">
               <Container>
                   <Grid container spacing={4}>
                       <Grid item md={3}>
                           <div className="single_dashboarHeading bg_01">
                               <div className="count_petient">
                                   <Typography variant="h4">09</Typography>
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
                               <Typography variant="h4">09</Typography>
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

export default DashboardMain;