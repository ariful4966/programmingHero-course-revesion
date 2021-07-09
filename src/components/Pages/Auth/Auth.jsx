import React from 'react';
import Header from '../../Pertials/Header/Header';
import { Container } from '@material-ui/core';

import { useState } from 'react';

import { Typography } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import OtherAuth from './OtherAuth';

import LoginForm from './LoginForm';
import SigninForm from './SigninForm';
import './Auth.scss';
import { facebookSign, googleSign, initializeLoginFramwork } from './manageAuth';
import { connect } from 'react-redux';
import authReducer from '../../../redux/reducers/authReducer';
import { FIELD_BLUR, SIGNIN_WITH_FACEBOOK, SIGNIN_WITH_GOOGLE } from '../../../redux/actions/authAction';

const Auth = (props) => {
    console.log(props);
    const [isLogin, setIsLogin] = useState(true)
    const { auth, dispatch } = props
    const history = useHistory();
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    initializeLoginFramwork()

    const handleGoogleSignIn = () => {
        googleSign().then(res => {

            dispatch({ type: SIGNIN_WITH_GOOGLE, res });
            if (res) {
                history.replace(from)
            }

        })


    }
    const handleFacebookSignIn = () => {
        facebookSign()
            .then(res => {

                dispatch({ type: SIGNIN_WITH_FACEBOOK, res });
                if (res) {
                    history.replace(from)
                }

            })

    }
  

    return (
        <div>
            <Header />
            <Container className="page_area bookingRoom_page">
                <div className="authentication-form">
                    {
                        auth.error && <p style={{color: 'red', textAlign:'center'}}>{auth.error}</p>
                    }
                    <div className="formElement">
                        <h1>{isLogin ? "Login" : "Create Account"}</h1>
                        {
                            isLogin ? <LoginForm /> : <SigninForm />
                        }
                        {
                            isLogin ? <Typography variant="paragraph">Don't Have an Account ? <Link onClick={() => setIsLogin(false)}>Create an Account</Link></Typography>:
                            <Typography variant="paragraph">Have an Account ? <Link onClick={()=>setIsLogin(true)}>Login</Link></Typography>
                        }
                    </div>
                    {
                        !isLogin && <OtherAuth handleGoogleSignIn={handleGoogleSignIn} handleFacebookSignIn={handleFacebookSignIn} />
                    }
                </div>
            </Container>
        </div>
    );
};
const mapStateToProps = state => {
    return { auth: state.authReducer }
}
const mapDisptchToProps = dispatch => ({
    dispatch
})

export default connect(mapStateToProps, mapDisptchToProps)(Auth);