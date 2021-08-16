import React, { useContext, useEffect, useState } from 'react';
import loginImg from '../../../images/loginPage.png'
import LoginForm from './LoginForm';
import jwt_decode from 'jwt-decode';
import './Login.css'
import { createNewUser, firebaseInitializationFramwork, loginUser, resetUserPassword } from './manageLogin';
import SignupForm from './SignupForm';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';

const Login = () => {
    const [existingUser, setExistingUser] = useContext(UserContext)

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        newUser: false,
        isSuccess: false,
        error: ''
    })

    const [newUser, setnewUser] = useState(false)
    const location = useLocation();
    const history = useHistory()
    firebaseInitializationFramwork()
    let { from } = location.state || { from: { pathname: "/" } };

    const hnadleBlur = (e) => {
        let isValied = true;

        if (e.target.name === 'email') {
            isValied = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            const passwordLength = user.password.length < 6;
            const hashNumber = /\d{1}/.test(e.target.value);
            isValied = (passwordLength && hashNumber)
        }
        if (e.target.name === 'confirmPassword') {
            const matchPassword = (user.password === e.target.value)
            isValied = matchPassword
        }
        if (isValied) {
            const newUser = {
                ...user
            }
            newUser[e.target.name] = e.target.value
            setUser(newUser)
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (newUser === false) {
            loginUser(user)
                .then(res => {
                    const userInfo = {
                        ...user,
                        name: res.displayName,
                        email: res.email,
                        newUser: true,
                        isSuccess: true,
                        isLogin: true
                    }
                    setUser(userInfo)
                    setExistingUser(userInfo)

                })

        } else {
            createNewUser(user)
                .then(res => {
                    const newUser = {
                        ...user,
                        name: res.displayName,
                        email: res.email,
                        isSuccess: true
                    }
                    setnewUser(false)
                    setUser(newUser)
                })
        }
    }
    const forgotPassword = () => {
        resetUserPassword(user)
    }


    return (
        <main>
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-5">
                        <div className="formContent h-100%">
                            {
                                user.isSuccess && <p className="text-success">Succefully {newUser ? 'Sign Up' : 'Login'} Your Account</p>
                            }
                            <div className="loginBox shadow text-center text-brand p-5">
                                <div className="boxTitle">
                                    <h2 className="text-uppercase mb-5" style={{ color: '#1CC7C1', textShadow: ' 0px 2px #617901', fontWeight: '800' }}>{newUser ? 'Sign Up' : 'Login'}</h2>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    {
                                        newUser ? <SignupForm hnadleBlur={hnadleBlur} /> : <LoginForm hnadleBlur={hnadleBlur} user={user} forgotPassword={forgotPassword} />
                                    }

                                    {
                                        newUser ? <button type="submit" className="btn btn-primary ms-auto d-block">Sign Up</button> :
                                            <button type="submit" className="btn btn-primary ms-auto d-block" >Login</button>
                                    }
                                </form>
                                {
                                    newUser ? <p onClick={() => setnewUser(false)}>Already have a new Account</p> : <p onClick={() => setnewUser(true)}>Create a new Account</p>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="imgContent">
                            <img src={loginImg} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
};

export default Login;