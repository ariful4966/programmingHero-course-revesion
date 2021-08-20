import React, { useEffect, useState } from 'react';
import AppointmentTable from '../AppointmentTable/AppointmentTable';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: '#f4fdfb',
    height: '100%'
}

const Allpatients = () => {
    const [patients, setPatients] = useState([])
    useEffect(() => {
        fetch('https://doctors-portal-server2-ph.herokuapp.com/appointments')
            .then(res => res.json())
            .then(appointment => {
                setPatients(appointment)
            })
    }, [patients])
    const heading = ['Sr No', 'Name', 'Gender', 'Age', 'Weight', 'Phone', 'Email']
    return (
        <section className="container-fluid" style={containerStyle}>
            <div className=" row" >
                    <Sidebar />
                <div className="col-md-10 p-4">
                    <h5 className="text-brand">All Patients</h5>
                    {
                        patients.length ?
                            <AppointmentTable heading={heading} patientAll data={patients}></AppointmentTable>
                            :
                            <div className="p-5">
                                <h4 className="lead text-center">Not Appoint Patients Here</h4>
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Allpatients;