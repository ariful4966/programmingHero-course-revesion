import React from 'react';

const SignUp = ({handleBlr}) => {
    return (
        <>
            <input type="text" name="name" placeholder="Your Name" onBlur={handleBlr}/>
            <input type="email" name="email" placeholder="Email Address" onBlur={handleBlr}/>
            <input type="password" name="password" placeholder="Password" onBlur={handleBlr} />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onBlur={handleBlr}/>
            <input type="submit" className="btn-bg" value="Sign Up" />
        </>
    );
};

export default SignUp;