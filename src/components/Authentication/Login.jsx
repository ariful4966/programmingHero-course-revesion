import React from 'react';

const Login = ({handleBlr}) => {
    return (
        <>
            <input type="email" name="email" placeholder="Email Address" onBlur={handleBlr}/>
            <input type="password" name="password" placeholder="Password" onBlur={handleBlr}/>
            <input type="submit" value="Login" className="btn-bg"/>
        </>
    );
};

export default Login;