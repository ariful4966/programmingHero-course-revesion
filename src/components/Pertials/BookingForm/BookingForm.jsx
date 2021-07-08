import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import { addToBook } from "../../../redux/actions/bookingActions";
import Button from '@material-ui/core/Button';
import './BookingForm.scss';
import { useHistory } from "react-router-dom";
const BookingForm = (props) => {
    const { dataFilter, book } = props
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        props.dispatch({ type: "ADD_TO_BOOK", data })
        history.push(`/place/${dataFilter.title}`)
    }



    console.log(props);
    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className="form_area">
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <TextField id="standard-multiline-static" label="Origin" defaultValue="Dhaka" {...register("origin", { required: true })} />
                    {errors.origin && <span>This field is required</span>}

                </div>
                <div>
                    <TextField id="standard-required" label="Destination" defaultValue={dataFilter.title} {...register("destination", { required: true })} />
                    {errors.destination && <span>This field is required</span>}
                </div>
                <Grid className='dateTime' container justify={"space-between"}>
                    <TextField id="date" label="From" type="date" defaultValue="2018-06-10" {...register("from", { valueAsDate: true })} />
                    {errors.from && <span>This field is required</span>}
                    <TextField id="standard-required" label="To" type="date" defaultValue="2017-05-24" {...register("to", { valueAsDate: true })} />
                    {errors.to && <span>This field is required</span>}
                </Grid>
                <Button variant="contained" type="submit" color="primary" >
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