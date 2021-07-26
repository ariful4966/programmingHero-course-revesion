import { Button, Typography } from '@material-ui/core';
import React from 'react';

const SignupForm = ({ userBlur, setLogin }) => {
    return (
        <>
            <form action="">
                <input type="text" name="name" placeholder="Your Name" onBlur={userBlur} /><br />
                <input type="email" name="email" placeholder="Your Email" onBlur={userBlur} /><br />
                <input type="password" name="password" placeholder="Your Password" onBlur={userBlur} /><br />
                <input type="confirmPassword" name="confirmPassword" placeholder="Your Confirm Password" onBlur={userBlur} /><br />
                <Button id="gradient_btn" className="auth_btn">Sign up</Button>
            </form>
            <Typography paragraph={true} onClick={()=>setLogin(true)}>Already Have an Account?</Typography>
        </>
    );
};

export default SignupForm;