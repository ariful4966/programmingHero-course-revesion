import React from 'react';
import { useHistory } from "react-router-dom";
import doctor from '../../../images/doctor.png'
import './MakeAppoinment.css'

const MakeAppoinment = () => {
    let history = useHistory();
    const handleAppointmentPage= ()=>{
        history.push('/appointment')
    }
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" className="img-fluid " />
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-primary text-uppercase">Appoinment</h5>
                        <h1 className="my-4"> Make an appoinment <br /> Today</h1>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam et, at, provident praesentium blanditiis illum omnis deleniti accusantium nam officiis ex ullam nemo veniam consequatur aut illo eligendi eos excepturi. </p>
                        <button className="btn btn-primary" onClick={handleAppointmentPage}>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;