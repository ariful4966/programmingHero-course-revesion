import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function LoginForm() {
    const classes = useStyles();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
           
           
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
           
            <Button type="submit" variant="contained" className="color_bg">
                Login
            </Button>
        </form>
    );
}
