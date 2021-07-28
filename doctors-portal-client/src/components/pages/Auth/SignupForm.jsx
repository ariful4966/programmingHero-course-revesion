import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

const SignupForm = ({ userBlur, setLogin, formSubmit, user }) => {
    console.log(user);
    return (
        <>
            <form action="" onSubmit={formSubmit}>
                <input type="text" name="name" placeholder="Your Name" onBlur={userBlur} required /><br />
                <input type="email" name="email" placeholder="Your Email" onBlur={userBlur} /><br />
                {user.errorEmail && <Typography style={{color:'red'}}>{user.errorEmail}</Typography>}
                <input type="password" name="password" placeholder="Your Password" onBlur={userBlur} /><br />
                {user.passError && <Typography style={{color:'red'}}>{user.passError}</Typography>}
                <input type="password" name="confirmPassword" placeholder="Your Confirm Password" onBlur={userBlur} /><br />
                {user.confirmPassError && <Typography style={{color:'red'}}>{user.confirmPassError}</Typography>}
                <Button type="submit" id="gradient_btn" className="auth_btn">Sign up</Button>
            </form>
            <Typography paragraph={true} onClick={()=>setLogin(false)}>Already Have an Account?</Typography>
        </>
    );
};

const mapStateToProps = state =>{
    return {user: state.user}
}

export default connect(mapStateToProps)(SignupForm);