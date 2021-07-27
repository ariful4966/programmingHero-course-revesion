import { Button } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const SideBar = () => {
    return (
        <div className="sitebar_area">
            <div className="sidebar_top">
                <div className="menu_btn">
                    <DashboardIcon />
                    <Button>Dashboard</Button>
                </div>
                <div className="menu_btn">
                    <CalendarTodayIcon />
                    <Button>Appoinment</Button>
                </div>
                <div className="menu_btn">
                    <GroupAddIcon />
                    <Button>Patients</Button>
                </div>
                <div className="menu_btn">
                    <ReceiptIcon />
                    <Button>Prescription</Button>
                </div>
                <div className="menu_btn">
                    <SettingsIcon />
                    <Button>Settings</Button>
                </div>
            </div>
            <div className="sidebar_bottom">
                <div className="menu_btn">
                    <ExitToAppIcon/>
                    <Button>Logout</Button>
                </div>
            </div>
        </div>
    );
};

export default SideBar;