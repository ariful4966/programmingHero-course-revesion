import React from 'react';

const BookingCard = ({ booking }) => {
    return (

        <div className="col ">
            <div className="card text-center shadow py-4">
                <div className="card-body">
                    <h4 className="card-title text-brand">{booking.subject}</h4>
                    <p><strong>{booking.visitingHour}</strong></p>
                    <p className="card-text text-uppercase text-secondary">{booking.totalSpace} Space Avialable</p>
                    <button className="btn">Book Appoinment</button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;