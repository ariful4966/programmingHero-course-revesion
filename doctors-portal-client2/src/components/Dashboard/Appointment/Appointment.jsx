import React, { useContext, useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';



const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([])
    const [existingUser] = useContext(UserContext)
    const handleDateChange = date => {

        setSelectedDate(date)
    }

    useEffect(() => {
        fetch('https://doctors-portal-server2-ph.herokuapp.com/appointmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: existingUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
            })
    }, [selectedDate])

    return (
        <section className="container-fluid">
            <div className="row dashboard-bg">
                <Sidebar />
                <div className="col-md-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                        className="w-100 shadow"
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate appointments={appointments} />
                </div>
            </div>
        </section>
    );
};

export default Appointment;