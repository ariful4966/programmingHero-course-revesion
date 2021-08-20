import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Allpatients from '../AllPatients/Allpatients';
import AppointmentTable from '../AppointmentTable/AppointmentTable';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'

const Dashboard = () => {
    const [existingUser] = useContext(UserContext)
    const [allPatients, setAllPatients] = useState([])
    const [allAppointment, setAllAppointment]= useState([])
    const [dateData, setDateData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => {
                
                setAllPatients(data)

            });

        fetch('http://localhost:5000/appointments?email=' + existingUser.email)
            .then(res => res.json())
            .then(data => {
              
                setAllAppointment(data)

            })

        if (allAppointment.length > 0) {
            const currDate = new Date();
            const todayData = allAppointment.filter(appoint => appoint.date === currDate);
            setDateData(todayData);
        }
    }, [allAppointment])

    const dashboardTableHeading = ['Sr. no', 'Date', 'Time', 'Name', 'Contact', 'Prescription', 'Action'];
    return (
        <section className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 ">
                    <h2>Dashboard</h2>

                    <div className="dashboard-interface">
                        <div className="dashboard-header row">
                            <div className="col-md-3">
                                <div className="bg-1 d-flex align-items-center justify-content-evenly dashboard-item">
                                    <h3>09</h3>
                                    <div>
                                        <p>Painding</p>
                                        <p>Appointment</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="bg-2 d-flex align-items-center justify-content-evenly dashboard-item">
                                    <h3>{dateData.length}</h3>
                                    <div>
                                        <p>Today's</p>
                                        <p>Appointment</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="bg-3 d-flex align-items-center justify-content-evenly dashboard-item">
                                    <h3>{allAppointment.length}</h3>
                                    <div>
                                        <p>Total</p>
                                        <p>Appointment</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="bg-4  d-flex align-items-center justify-content-evenly dashboard-item">
                                    <h3>{allPatients.length}</h3>
                                    <div>
                                        <p>Total</p>
                                        <p>Patients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboarInfoTable m-3 p-4">
                        <div className="row shadow">
                            <div className="col-md-12">
                                <h5 className="text-brand">Recent Appointments</h5>
                            </div>
                            <AppointmentTable heading={dashboardTableHeading} data={allAppointment} dashboard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;