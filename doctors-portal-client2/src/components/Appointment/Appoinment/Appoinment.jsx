import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import BookAppoinment from '../BookAppoinment/BookAppoinment';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar />
            <AppoinmentHeader handleDateChange={handleDateChange} />
            <BookAppoinment date={selectedDate} />
            <Footer />
        </div>
    );
};

export default Appoinment;