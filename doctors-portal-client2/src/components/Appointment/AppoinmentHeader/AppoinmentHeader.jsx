import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppoinmentHeader = ({ handleDateChange }) => {

    return (
        <header className="header" style={{height: '500px', zIndex: '.5'}}>
            <main  className="container h-100">
                <div className="row d-flex align-items-center h-100">
                    <div className="col-md-4 offset-md-1">
                        <h1 style={{ color: '#3A4256' }}>Appoinment</h1>
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                    <div className="col-md-6">
                        <img src={chair} alt="" className="img-fluid" />
                    </div>
                </div>
            </main>
        </header>

    );
};

export default AppoinmentHeader;