import React from 'react';
import { resetPassword } from './LoginManager';

const LoginForm = ({ userState }) => {
    const [newUser, setNewUser, user, setUser, handleBlur, handleSubmit, googleSignIn, facebookSignIn] = userState;
    return (
        <div className="card">
            <h2>Login</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Your Email Address</label>
                    <input type="email" name="email" onBlur={handleBlur} id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onBlur={handleBlur} id="password" />
                </div>
                <p onClick={() => setNewUser(!newUser)}>Create A New Account</p>
                <input type="submit" value="Login" />
            </form>
            <button onClick={()=>resetPassword(user.email)}  className="btn-login">Forget or Reset your Password</button>
            <button onClick={googleSignIn} className="btn-login"> <img src="https://us.123rf.com/450wm/kornienko/kornienko1611/kornienko161100200/66047248-chisinau-moldova-november-16-2016-google-logo-on-pc-screen-google-it-is-the-largest-internet-search-.jpg?ver=6" alt="" /> <span>Sign in With Google</span></button>
            <button onClick={facebookSignIn} className="btn-login"> <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" /> <span>Sign in With Facebook</span></button>
        </div>
    );
};

export default LoginForm;