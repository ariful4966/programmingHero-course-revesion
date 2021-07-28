import { Container, Grid, Popper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux';
import AppoinmentTable from './AppoinmentTable';

const AppoinmentDashboard = ({appoinments}) => {
    const [value, setValue] = useState(new Date())
    const nowDay = value.toLocaleDateString('en-US')
    const todayAppoinment = appoinments.filter(ap=>ap.date === nowDay);
    const headCells = ['Name', 'Shedule', 'Action']
    return (
        <div className="appoinment_section">
            <Typography variant="h2">Appoinment</Typography>
            <Container>
                <Grid container spacing={6}>
                    <Grid item md={6}>
                        <div className="appoinment_sec_calender">
                            
                            <Calendar
                                    onChange={(d) => setValue(d)}
                                    value={value}
                                    minDate={new Date(2021, 0, 1)}
                                    maxDate={new Date(2021, 11, 31)}
                                    minDetail={'year'}
                                />
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <AppoinmentTable appoinments={todayAppoinment} headCells={headCells} apDashbod title='Apoinments'/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
const mapStateToProps = state=>{
    return{appoinments: state.appoinments}
}

export default connect(mapStateToProps)(AppoinmentDashboard);