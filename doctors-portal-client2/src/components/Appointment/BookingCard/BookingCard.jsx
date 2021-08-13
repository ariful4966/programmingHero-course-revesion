import React from 'react';
import AppoinmentForm from '../AppoinmentForm/AppoinmentForm';

const BookingCard = ({ booking }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (

        <div className="col ">
            <div className="card text-center shadow py-4">
                <div className="card-body">
                    <h4 className="card-title text-brand">{booking.subject}</h4>
                    <p><strong>{booking.visitingHour}</strong></p>
                    <p className="card-text text-uppercase text-secondary">{booking.totalSpace} Space Avialable</p>
                    <button className="btn" onClick={openModal}>Book Appoinment</button>
                    <AppoinmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} booking={booking}/>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;