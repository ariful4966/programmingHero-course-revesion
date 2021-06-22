import React from 'react';
import google from '../../images/google.png'
import facebook from '../../images/facebook.png'

const OthersLogin = (props) => {
    const { handleGoogleSignIn } = props;
    return (
        <div className="other_log">
            <button className="btn" onClick={handleGoogleSignIn}> <img src={google} alt="" /> <span>Login With Google</span></button>
            <button className="btn"> <img src={facebook} alt="" /> <span>Login With Facebook</span></button>
        </div>
    );
};


export default OthersLogin;