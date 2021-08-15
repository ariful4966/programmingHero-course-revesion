import React from 'react';
import AppointmentTable from '../AppointmentTable/AppointmentTable';

const AppointmentByDate = ({ appointments }) => {
    console.log(appointments);
    const heading = ['Name', 'Phone', 'Email']
    return (
        <div>
            <h2 className="text-center text-brand">Appointments</h2>
            {
                appointments.length ?
                    <AppointmentTable data={appointments} heading={heading} dateAppointment />
                    :
                    <div className="p-5">
                        <h4 className="lead text-center">No Appointments for this Date</h4>
                    </div>
            }
        </div>
    );
};

export default AppointmentByDate;