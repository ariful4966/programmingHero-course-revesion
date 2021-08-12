import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleDoctor = ({doctor}) => {
    return (
        <div class="col">
            <div class="card">
                <img src={doctor.photo} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                    <h5 class="card-title">{doctor.name}</h5>
                    <p class="card-text"><FontAwesomeIcon style={{color: '#1CC7C1'}} icon={doctor.icon}/> <span className="text-secondary">{doctor.phone}</span></p>
                </div>
            </div>
        </div>
    );
};

export default SingleDoctor;