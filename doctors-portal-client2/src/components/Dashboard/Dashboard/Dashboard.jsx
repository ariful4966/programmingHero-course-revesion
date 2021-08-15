import React, { useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const containerStyle = {
    backgroundColor: '#f4fdfb',
    height: '100%'
}

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([])
    const handleDateChange = date => {

        setSelectedDate(date)
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate })
        })
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
            })
    }, [selectedDate])

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
                        <AppointmentByDate appointments={appointments} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;