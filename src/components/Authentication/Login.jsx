import React from 'react';

const Login = () => {
    return (
        <>
            <input type="email" name="email" placeholder="Email Address"/>
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" value="Login" className="btn-bg"/>
        </>
    );
};

export default Login;