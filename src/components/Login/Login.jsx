import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        photo: '',
        success: false,
        isLogin: false,
        error: ''
    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const getUser = {
                    ...user,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    isLogin: true
                }
                setUser(getUser)
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    const handleFacebookLogin = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const getUser = {
                    ...user,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    isLogin: true
                }
                setUser(getUser)
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    const handleLogout = () => {
        firebase.auth().signOut()
            .then(res => {

                const emptyUser = {
                    ...user,
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    confirmPassword: '',
                    photo: '',
                    isLogin: false,
                    error: '',
                    success: false
                }
                setUser(emptyUser)

            }).catch((error) => {
                console.log(error.message);
            });
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
            firebase.auth().createUserWithEmailAndPassword(user.email, user.confirmPassword)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = "";
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    updateProfile(user)

                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setUser(newUserInfo)
                    updateProfile(user)
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    newUserInfo.isLogin = true;
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                })
                .catch((error) => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    newUserInfo.isLogin = false;
                    setUser(newUserInfo)
                });
        }
        e.preventDefault();
    }
    const updateProfile = (newUser) => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: newUser.name,
            phoneNumber: newUser.phone
        }).then(res => {
            console.log(res);
        }).catch(function (error) {
            // An error happened.
        });
    }
    console.log(user);
    const userState = [newUser, setNewUser, user, setUser, handleBlur, handleSubmit, handleGoogleLogin, handleFacebookLogin]
    return (
        <div className="container">
            <button onClick={handleLogout}>Logout</button>
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