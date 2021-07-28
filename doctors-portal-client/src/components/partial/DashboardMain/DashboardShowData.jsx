import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import AppoinmentTable from '../../pages/Dashboard/AppoinmentTable';

const DashboardShowData = () => {
    return (
        <Paper className="dashboard_showData_area">
            
            <div className="showData_details">
                <AppoinmentTable/>
            </div>
        </Paper>
    );
};

export default DashboardShowData;