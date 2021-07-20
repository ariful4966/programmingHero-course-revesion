import React, { useContext, useState } from 'react';

import './Login.css'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { createUserWithEmailAndPassword, handleFacebookLogin, handleGoogleLogin, handleLogout, initializeLoginFramework, singInWithEmailAndPassword } from './LoginManager';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: null,
        password: '',
        confirmPassword: '',
        photo: '',
        success: false,
        isLogin: false,
        error: ''
    })
    initializeLoginFramework()
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const googleSignIn = () => {
        handleGoogleLogin(user)
            .then(res => {
                handleResponse(res, true)
            })
    }
    const facebookSignIn = () => {
        handleFacebookLogin(user)
            .then(res => {
                handleResponse(res, true)
            })
    }
    const logOut = () => {
        handleLogout(user)
            .then(res => {
                handleResponse(res, false)

            })
    }
    const handleResponse = (res, redirect) => {
        setUser(res)
        const newUser = {
            name: res.name,
            email: res.email,
            photo: res.photo,
            isLogin: true,
            isSuccess:true
        }
        setLoggedInUser(newUser)
        if (redirect) {
            history.replace(from);
        }
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const passwordValidation = user.password.length < 6;
            const passwordHashNumber = /\d{1}/.test(e.target.value)
            isFieldValid = (passwordValidation && passwordHashNumber)
        }
        if (e.target.name === 'confirmPassword') {
            const confirmPasswordValidation = (e.target.value === user.password);
            isFieldValid = confirmPasswordValidation
        }

        if (isFieldValid) {
            const newUser = {
                ...user
            }
            newUser[e.target.name] = e.target.value
            setUser(newUser)
        }

    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.confirmPassword) {
            createUserWithEmailAndPassword(user)
                .then(res => {
                    handleResponse(res, true)
                })
        }

        if (!newUser && user.email && user.password) {
            singInWithEmailAndPassword(user)
                .then(res => {
                    handleResponse(res, true)
                })
        }
        e.preventDefault();
    }

    // const verifyEmail = () => {
    //     firebase.auth().currentUser.sendEmailVerification()
    //         .then(() => {
    //             // Email verification sent!
    //             // ...
    //         });
    // }

    const userState = [newUser, setNewUser, user, setUser, handleBlur, handleSubmit, googleSignIn, facebookSignIn]
    return (
        <div className="container">
            {
                user.success && <p style={{ color: 'green' }}>User {newUser ? 'Create' : 'Logged in'} Successfully</p>
            }
            {
                user.error && <p style={{ color: 'red' }}>{user.error}</p>
            }
            {
                user.isLogin &&
                <div>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <img src={user.photo} alt="" />
                </div>
            }
            <div className="card-center">
                {
                    newUser ? <SignupForm userState={userState}></SignupForm> : <LoginForm userState={userState}></LoginForm>
                }
            </div>
        </div>
    );
};

export default Login;