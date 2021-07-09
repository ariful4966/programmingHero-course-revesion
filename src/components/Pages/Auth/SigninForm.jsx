import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { ACCOUNT_CREATE } from '../../../redux/actions/authAction';
import { createAccount } from './manageAuth';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const SigninForm = (props) => {
    const { dispatch } = props;
    const classes = useStyles();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        createAccount(data.email, data.confirmPassword)
        .then(res=>{
            const result = res.user
            dispatch({ type:ACCOUNT_CREATE, result})
        })
    };
    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <TextField
                    id="standard-password-input"
                    label="First Name"
                    type="text"
                    {...register("firstName", { required: true })}
                />
                {errors.firstName && <span>This field is required</span>}
            </div>
            <div>
                <TextField
                    id="standard-password-input"
                    label="Last Name"
                    type="text"
                    {...register("lastName", { required: true })}
                />
                {errors.lastName && <span>This field is required</span>}
            </div>
            <div>
                <TextField
                    id="standard-password-input"
                    label="Username or Email"
                    type="text"
                    {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
            </div>
            <div>
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
            </div>
            <div>
                <TextField
                    id="standard-password-input"
                    label="Confirm Password"
                    type="password"
                    {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && <span>This field is required</span>}
            </div>
            <Button type="submit" variant="contained" className="color_bg">
                Create an Account
            </Button>
        </form>
    );
}

const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect(mapDispatchToProps)(SigninForm)