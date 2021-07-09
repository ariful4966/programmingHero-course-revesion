import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { addToBook } from "../../../redux/actions/bookingActions";
import Button from '@material-ui/core/Button';
import './BookingForm.scss';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));
const BookingForm = (props) => {
    const classes = useStyles();
    const { dataFilter, book } = props
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        props.dispatch({ type: "ADD_TO_BOOK", data })
        history.push(`/place/${dataFilter.title}`)
    }



    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className="form_area">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <TextField 
                    id="standard-required" 
                    label="Origin" 
                    placeholder="Dhaka"
                    {...register("origin", { required: true })} />
                    {errors.origin && <span>This field is required</span>}

                </div>
                <div>
                    <TextField id="standard-required" label="Destination" placeholder={dataFilter.title}  {...register("destination", { required: true })} />
                    {errors.destination && <span>This field is required</span>}
                </div>
                <Grid className='dateTime' container justify={"space-between"}>
                    <TextField id="date" label="From" type="date" defaultValue="2018-06-10" {...register("from", { valueAsDate: true })} />
                    {errors.from && <span>This field is required</span>}
                    <TextField id="date" label="To" type="date" defaultValue="2017-05-24" {...register("to", { valueAsDate: true })} />
                    {errors.to && <span>This field is required</span>}
                </Grid>
                <Button variant="contained" type="submit" className="color_bg" >
                    Start Booking...
                </Button>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return { ...state.bookingReducer }
}
const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm)