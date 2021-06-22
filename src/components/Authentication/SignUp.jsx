import React from 'react';

const SignUp = () => {
    return (
        <>
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Email Address" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" />
            <input type="submit" className="btn-bg" value="Sign Up" />
        </>
    );
};

export default SignUp;