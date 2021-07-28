import { Grid, Typography } from '@material-ui/core';
import DashboardMain from '../../partial/DashboardMain/DashboardMain';
import DashboardShowData from '../../partial/DashboardMain/DashboardShowData';
import SideBar from '../../partial/SideBar/SideBar';
import './Dashboard.scss';

const Dashboard = () => {
    return (
        <div className="dashboard_area">
            <Grid container >
                <Grid item md={3} className="sidebar_section">
                    <SideBar />
                </Grid>
                <Grid item md={9}>
                    <div className="dashboard_switchable">
                        <Typography variant="h2">Dashboard</Typography>
                        <DashboardMain />
                        <DashboardShowData/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;