import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField} from '@material-ui/core';
import DateTime from '../DateTime/DateTime';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function BookingForm() {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    const handleChange = (event) => {
        setValue(event.target.value);
    };


    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="Origin"
                    multiline
                    rowsMax={4}
                    value={value}
                    onChange={handleChange}
                />

            </div>
            <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="Destination"
                    multiline
                    rowsMax={4}
                    value={value}
                    onChange={handleChange}
                />
            </div>
            <div>
                <DateTime/>
            </div>
        </form>
    );
}
