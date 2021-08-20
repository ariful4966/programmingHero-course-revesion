import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleDoctor = ({ doctor }) => {
    return (
        <div class="col-md-4 col-sm-6">
            <div class="card">
                {doctor.image ? <img src={`data:image/jpeg;base64,${doctor.image.img}`} class="card-img-top" alt="..." style={{ height: '300px' }} /> :
                    <img src={`https://doctors-portal-server2-ph.herokuapp.com/${doctor.img}`} class="card-img-top" alt="..." style={{ height: '300px' }} />
                }
                <div class="card-body text-center">
                    <h5 class="card-title">{doctor.name}</h5>
                    <p class="card-text"><FontAwesomeIcon style={{ color: '#1CC7C1' }} icon={faPhoneAlt} /> <span className="text-secondary">{doctor.phone}</span></p>
                </div>
            </div>
        </div>
    );
};

export default SingleDoctor;