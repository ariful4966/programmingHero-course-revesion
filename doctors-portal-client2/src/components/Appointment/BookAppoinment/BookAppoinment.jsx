import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        subject: 'Teeth Orthodontcs',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:50 AM - 11:30 AM',
        totalSpace: 5
    },
    {
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 PM - 6:30 PM',
        totalSpace: 9
    },
    {
        subject: 'Cavety Protechtion',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 6
    },
    {
        subject: 'Prosthodontic services',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 8
    },
    {
        subject: 'Dental X-rays',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
]

const BookAppoinment = ({ date }) => {
    return (
        <section className="pb-5 container">
            <h2 className="text-center text-brand ">Availdable Appoinment on {date.toDateString()}</h2>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
                    {
                        bookingData.map((bk, indx) =>
                            <BookingCard booking={bk} key={indx} date={date} />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppoinment;