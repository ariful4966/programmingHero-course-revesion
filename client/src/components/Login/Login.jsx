import React from 'react';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { RoomData } from '../../App';
import { getAuthToken, googleSignIn, instalizationLoginFramwork } from './authManeger';
import './Login.css'

const Login = () => {
    const [, , , loggedInUser, setLoggedInUser] = useContext(RoomData)
    instalizationLoginFramwork()
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoolgeSignUp = () => {
        googleSignIn()
            .then(res => {
                const { displayName, email } = res;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                storeAuthToken()
                history.replace(from);
            })
    }
    const storeAuthToken = ()=>{
        getAuthToken()
        .then(res=>console.log(res))
    }


    return (
        <div>
            <h1>This is login page</h1>
            <h4>{loggedInUser.name}</h4>
            <button onClick={handleGoolgeSignUp}> <img src="https://c0.klipartz.com/pngpicture/293/394/sticker-png-google-chrome-extension-web-browser-browser-extension-google-sphere-google-chrome-chrome-os-google-chrome-extension-google-chrome-icon-thumbnail.png" alt="" /> Sign in with google</button>
        </div>
    );
};

export default Login;