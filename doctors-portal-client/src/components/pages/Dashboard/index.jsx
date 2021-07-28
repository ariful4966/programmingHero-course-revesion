import { Grid } from '@material-ui/core';
import Dashboard from './Dashboard';
import SideBar from '../../partial/SideBar/SideBar';
import './Dashboard.scss';
import { connect } from 'react-redux';
import AppoinmentDashboard from './AppoinmentDashboard';
import PatientDashboard from './PatientDashboard';
import PrescriptionDashboard from './PrescriptionDashboard';
import Settings from './Settings';

const Index = ({ dashBoardTab, appoinments }) => {
    return (
        <div className="dashboard_area">
            <Grid container >
                <Grid item md={3} className="sidebar_section">
                    <SideBar />
                </Grid>
                <Grid item md={9}>
                    <div className="dashboard_switchable">
                        {dashBoardTab === 'dashboard' && <Dashboard appoinments={appoinments}/>}
                        {dashBoardTab === 'appoinment' && <AppoinmentDashboard />}
                        {dashBoardTab === 'patients' && <PatientDashboard />}
                        {dashBoardTab === 'prescription' && <PrescriptionDashboard />}
                        {dashBoardTab === 'setting' && <Settings />}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
const mapStateToProps = state => {

    return { dashBoardTab: state.dashBoardTab, appoinments: state.appoinments }
}




export default connect(mapStateToProps)(Index);