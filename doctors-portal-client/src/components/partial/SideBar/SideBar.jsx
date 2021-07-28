import { Button, Typography } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './SideBar.scss'
import { connect } from 'react-redux';
import { signOutUser, dashboardTab } from '../../../redux/action/action';
import userImg from '../../../images/user.jpg'
import { useHistory } from 'react-router';

const SideBar = ({ user, signOutUser, dashboardTab }) => {
    const history = useHistory()
    const homeBack = () => {
        history.push('/')
    }
    return (
        <div className="sitebar_area">
            <div className="sidebar_top">
                <div className="menu_btn" onClick={() => dashboardTab('dashboard')}>
                    <DashboardIcon />
                    <Button>Dashboard</Button>
                </div>
                <div className="menu_btn" onClick={() => dashboardTab('appoinment')}>
                    <CalendarTodayIcon />
                    <Button>Appoinment</Button>
                </div>
                <div className="menu_btn" onClick={() => dashboardTab('patients')}>
                    <GroupAddIcon />
                    <Button>Patients</Button>
                </div>
                <div className="menu_btn" onClick={() => dashboardTab('prescription')}>
                    <ReceiptIcon />
                    <Button>Prescription</Button>
                </div>
                <div className="menu_btn" onClick={() => dashboardTab('setting')}>
                    <SettingsIcon />
                    <Button>Settings</Button>
                </div>
            </div>
            <div className="sidebar_bottom">
                <div className="menu_btn" onClick={homeBack} title="Back To Home">
                    <img src={user.photo ? user.photo : userImg} alt="" />
                    <Typography variant="h5">{user.name}</Typography>
                </div>
                <div className="menu_btn" onClick={signOutUser}>
                    <ExitToAppIcon />
                    <Button>Logout</Button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {  user: state.user }
}
const mapDispachToProps = {
    signOutUser,
    dashboardTab
}

export default connect(mapStateToProps, mapDispachToProps)(SideBar);