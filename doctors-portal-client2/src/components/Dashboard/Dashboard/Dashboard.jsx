import React from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const containerStyle = {
    backgroundColor: '#f4fdfb',
    height: '100%'
}

const Dashboard = () => {
    const handleDateChange = ()=>{
        
    }
    return (
        <section>
            <div style={containerStyle} className="conatiner-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-5">
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                    <div className="col-md-5">
                        <AppointmentByDate />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;