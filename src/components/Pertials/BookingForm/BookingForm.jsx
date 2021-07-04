import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import './BookingForm.scss';
import DateTime from '../DateTime/DateTime';
import { useHistory } from 'react-router-dom';
import { addToBook } from '../../../redux/actions/bookingActions';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            // width: '100%',
        },
    },
}));

const BookingForm = (props) => {
    const { dataFilter } = props;
    console.log(props);
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const history = useHistory()
    const { title, id } = dataFilter;

    const bookingFormSubmit = (e) => {
        history.push(`/place/${title}`)
        e.preventDefault();
    }


    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={bookingFormSubmit}>
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
            <div className="date">
                <DateTime />
            </div>
            <Button variant="contained" type="submit" > Start Booking</Button>
        </form>
    );
}

const mapStateToProps = state => {
    return { ...state.bookingReducer }
}
const mapDispatchToProps = {
    addToBook: addToBook
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm)