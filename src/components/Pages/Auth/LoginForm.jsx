import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { loginAccount } from './manageAuth';
import { connect } from 'react-redux';
import { LOGIN_ACCOUNT } from '../../../redux/actions/authAction';
import { useHistory, useLocation } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const LoginForm = (props) => {
    const history = useHistory(); 
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const { dispatch } = props;
    const classes = useStyles();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { email, password } = data
        loginAccount(email.toLowerCase(), password)
            .then(res => {
                
                dispatch({ type: LOGIN_ACCOUNT, res });
                if(!res.message){
                    history.replace(from)
                }
            })
    }
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
const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect(mapDispatchToProps)(LoginForm);