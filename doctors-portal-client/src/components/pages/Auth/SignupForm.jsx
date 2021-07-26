import { Button, Typography } from '@material-ui/core';
import React from 'react';

const SignupForm = ({ userBlur, setLogin, formSubmit }) => {
    return (
        <>
            <form action="" onSubmit={formSubmit}>
                <input type="text" name="name" placeholder="Your Name" onBlur={userBlur} /><br />
                <input type="email" name="email" placeholder="Your Email" onBlur={userBlur} /><br />
                <input type="password" name="password" placeholder="Your Password" onBlur={userBlur} /><br />
                <input type="password" name="confirmPassword" placeholder="Your Confirm Password" onBlur={userBlur} /><br />
                <Button type="submit" id="gradient_btn" className="auth_btn">Sign up</Button>
            </form>
            <Typography paragraph={true} onClick={()=>setLogin(false)}>Already Have an Account?</Typography>
        </>
    );
};

export default SignupForm;