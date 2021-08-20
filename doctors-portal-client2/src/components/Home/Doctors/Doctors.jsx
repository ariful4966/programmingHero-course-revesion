import React, { useEffect, useState } from 'react';
import SingleDoctor from '../SingleDoctor/SingleDoctor';
import doctor from '../../../images/doctor.png';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Doctors.css'
const doctorData = [
    {
        name: 'Dr. Sabrina Jahan',
        photo: doctor,
        phone: '+61 123 456789',
        icon: faPhoneAlt
    },
    {
        name: 'Dr. Coudi',
        photo: doctor,
        phone: '+61 123 456789',
        icon: faPhoneAlt
    },
    {
        name: 'Dr. Shakor Sharma',
        photo: doctor,
        phone: '+61 123 456789',
        icon: faPhoneAlt
    }
]

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <section className="serces-container my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 style={{ color: '#1CC7C1', textTransform: 'uppercase' }}>Our Doctors</h5>
                </div>
                <div className="row  g-4 my-5 doctor">
                    {
                        doctors.map((doctor, index) => <SingleDoctor key={index} doctor={doctor} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;