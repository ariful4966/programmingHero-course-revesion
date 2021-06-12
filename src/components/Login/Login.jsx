import React from 'react';
import { googleSignIn, instalizationLoginFramwork } from './authManeger';
import './Login.css'

const Login = () => {
    instalizationLoginFramwork()
    const handleGoolgeSignUp = () => {
        googleSignIn()
            .then(res => {
                console.log(res);
            })
    }
    return (
        <div>
            <h1>This is login page</h1>
            <button onClick={handleGoolgeSignUp}> <img src="https://c0.klipartz.com/pngpicture/293/394/sticker-png-google-chrome-extension-web-browser-browser-extension-google-sphere-google-chrome-chrome-os-google-chrome-extension-google-chrome-icon-thumbnail.png" alt="" /> Sign in with google</button>
        </div>
    );
};

export default Login;