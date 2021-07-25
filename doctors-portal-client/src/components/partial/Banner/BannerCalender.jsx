import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BannerCalender = () => {
    const [value, setValue] = useState(new Date());
    const handleDate = (e)=>{
        console.log(e.toLocaleDateString('en-US'))
        console.log(value);
    }
    return (
        <div>
            <Typography variant="h2">Calender</Typography>
            <Calendar
                onChange={(d)=>handleDate(d)}
                value={value}
                minDate={new Date(2021,0,1)}
                maxDate={new Date(2021,11,31)}
                minDetail={'year'}
            />
        </div>
    );
};

export default BannerCalender;


