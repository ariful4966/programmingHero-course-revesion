import React from 'react';
import google from '../../images/google.png'
import facebook from '../../images/facebook.png'
import { handleGoogole, signInWithGoogle } from '../../redux/actions';
import { firebaseInstalizationFramwork, handleGoogoleSignIn } from './AuthenticationManager';
import { connect } from 'react-redux';

const OthersLogin = (props) => {
    const {signInWithGoogle}=props;
    return (
        <div className="other_log">
            <button className="btn" onClick={signInWithGoogle}> <img src={google} alt="" /> <span>Login With Google</span></button>
            <button className="btn"> <img src={facebook} alt="" /> <span>Login With Facebook</span></button>
        </div>
    );
};
const mapStateToProps = (state) => {

}
const mapDispatchToProps = {
    signInWithGoogle: signInWithGoogle
}

export default connect(mapStateToProps, mapDispatchToProps)(OthersLogin);