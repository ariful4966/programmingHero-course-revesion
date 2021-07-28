import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import AppoinmentTable from '../../partial/DashboardPartials/AppoinmentTable';

const PrescriptionDashboard = ({ patients }) => {
    const headCells = ['Sr.No', 'Name', 'Date', 'Contact', 'Presctiption'];
    const prescriptionData = patients.filter(pt => pt.prescription !== '');
    return (
        <div className="patient_section">
            <Typography variant="h2">Prescription</Typography>
            <Container>
                <AppoinmentTable appoinments={prescriptionData} headCells={headCells} apDashbod={false} prescription title="All Prescriptions" />
            </Container>
        </div>
    );
};
const mapStateToProps = state => {
    return { patients: state.patients }
}

export default connect(mapStateToProps)(PrescriptionDashboard);