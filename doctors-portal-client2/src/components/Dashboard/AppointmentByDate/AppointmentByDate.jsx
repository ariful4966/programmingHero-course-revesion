import React from 'react';

const AppointmentByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h1>Appointment {appointments.length}</h1>
            {
                appointments.map(appointment=> <li key={appointment._id}>{appointment.name}</li>)
            }
        </div>
    );
};

export default AppointmentByDate;