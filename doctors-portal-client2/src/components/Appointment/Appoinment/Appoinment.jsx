import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';

const Appoinment = () => {

    const handleDateChange = date => {
        console.log(date);
    }
    return (
        <div>
            <Navbar />
            <AppoinmentHeader handleDateChange={handleDateChange} />
            <Footer />
        </div>
    );
};

export default Appoinment;