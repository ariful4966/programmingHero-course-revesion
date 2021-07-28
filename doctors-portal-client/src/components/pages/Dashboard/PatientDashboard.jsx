import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import AppoinmentTable from '../../partial/DashboardPartials/AppoinmentTable';

const PatientDashboard = ({patients}) => {
    const headCells = ['Sr.No', 'Name', 'Gender', 'Age', 'Weight', 'Contact', 'Address']
    return (
        <div className="patient_section">
            <Typography variant="h2">Patients</Typography>
            <Container>
                <AppoinmentTable appoinments={patients} headCells={headCells} apDashbod={false} patient title="All Patients" />
            </Container>
        </div>
    );
};

const mapStateToProps = state => {
    return { patients: state.patients }
}

export default connect(mapStateToProps)(PatientDashboard);