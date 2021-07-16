import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RoomData } from '../../App';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';
import { useState } from 'react';

const Book = () => {
    const { bedType } = useParams();
    const [rooms, , , loggedInUser, setLoggedInUser] = useContext(RoomData);
    const matchRooms = rooms.filter(rm => rm.bedType === bedType)
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });

    const handleCheckInDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.checkIn = date
        setSelectedDate(newDates);
    };

    const handleCheckoutDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.checkOut = date
        setSelectedDate(newDates);
    };

    const handleBooking = () => {
        const newBooking = { ...loggedInUser, ...selectedDate }
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <h1> Hello, {loggedInUser.name} Let's! Book a Double Room {bedType}</h1>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Check In Date"
                        value={selectedDate.checkIn}
                        onChange={handleCheckInDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Checkout Date"
                        format="dd/MM/yyyy"
                        value={selectedDate.checkOut}
                        onChange={handleCheckoutDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Button onClick={handleBooking} variant="contained" color="primary">
                    Book Now
                </Button>
            </MuiPickersUtilsProvider>
        </div>
    );
};

export default Book;