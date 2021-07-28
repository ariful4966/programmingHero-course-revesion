import { Typography } from '@material-ui/core';
import React from 'react';
import DashboardMain from '../../partial/DashboardMain/DashboardMain';
import DashboardShowData from '../../partial/DashboardMain/DashboardShowData';

const Dashboard = ({appoinments}) => {
    return (
        <div className="dashboard_section">
            <Typography variant="h2">Dashboard</Typography>
            <DashboardMain appoinments={appoinments}/>
            <DashboardShowData appoinments={appoinments}/>
        </div>
    );
};

export default Dashboard;