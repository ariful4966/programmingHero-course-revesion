import React from 'react';
import { Button } from '@material-ui/core';
import fb from '../../../placeData/Icon/fb.png';
import gl from '../../../placeData/Icon/google.png'

const OtherAuth = (props) => {
    const { handleGoogleSignIn, handleFacebookSignIn } = props
    return (
        <div className="otherAuth">
            <p className="or">Or</p>

            <Button variant="contained" onClick={handleFacebookSignIn}><img src={fb} alt="" />  Continue With Facebook</Button><br />
            <Button variant="contained" onClick={handleGoogleSignIn}><img src={gl} alt="" />  Continue With Google</Button>
        </div>
    );
};

export default OtherAuth;