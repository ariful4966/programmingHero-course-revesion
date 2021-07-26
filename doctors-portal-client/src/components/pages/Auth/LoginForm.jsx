import { Button, Typography } from '@material-ui/core';
import React from 'react';

const Login = ({userBlur, setLogin}) => {

    return (
        <>
            <form action="">
            <input type="email" name="email" placeholder="Your Email"  required onBlur={userBlur}/><br />
            <input type="password" name="password" placeholder="Your Password"   required onBlur={userBlur}/><br />
            <Typography paragraph={true} color="primary">Forgot Your Password?</Typography>
            <Button type="submit" id="gradient_btn" className="auth_btn">Login</Button>
        </form>
        <Typography paragraph={true} onClick={()=>setLogin(false)}>Create A New Account</Typography>
        </>
    );
};

export default Login;