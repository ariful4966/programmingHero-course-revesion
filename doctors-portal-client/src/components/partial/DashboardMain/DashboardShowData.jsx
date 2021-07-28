import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import AppoinmentTable from '../DashboardPartials/AppoinmentTable';

const DashboardShowData = ({appoinments}) => {
    const headCells = [
        'Sr.No', 'Date', 'Time', 'Name', 'Contact', 'Prescription', 'Action'
    ];
    return (
        <Paper className="dashboard_showData_area">
            
            <div className="showData_details">
                <AppoinmentTable appoinments={appoinments} headCells={headCells} main title='Recent Appoinments' />
            </div>
        </Paper>
    );
};

export default DashboardShowData;