import React, { useEffect, useState } from 'react';
import SingleDoctor from '../SingleDoctor/SingleDoctor';
import doctor from '../../../images/doctor.png';
import './Doctors.css'
import Loading from '../../Shared/Loading/Loading';


const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://doctors-portal-server2-ph.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [doctors])
   

    return (
        <section className="serces-container my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 style={{ color: '#1CC7C1', textTransform: 'uppercase' }}>Our Doctors</h5>
                </div>
                <div className="row  g-4 my-5 doctor">
                    {doctor.length === 0 ? <Loading /> :
                        doctors.map((doctor, index) => <SingleDoctor key={index} doctor={doctor} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;