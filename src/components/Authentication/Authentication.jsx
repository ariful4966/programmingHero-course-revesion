import React, { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { Container } from '@material-ui/core';
import logo from '../../images/logo2.png';
import './Login.scss'
import SignUp from './SignUp';
import Login from './Login';
import OthersLogin from './OthersLogin';
import { createUser, googleSignIn, loginUser } from './AuthenticationManager';
import { useContext } from 'react';
import { Dataprovid } from '../../App';

const Authentication = () => {
    const [page, setPage] = useState(false)
    const { data, setData } = useContext(Dataprovid);
    const history = useHistory()
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res);
                const getUser = {
                    name: res.displayName,
                    email: res.email,
                    photo: res.photoURL
                }

                setData({ ...data, user: { ...data.user, ...getUser, isLogedIn: true } })

                history.replace(from);
            })
    }

    const handleResponse = (res, redirect) => {

        const newUser = {
            name: res.displayName,
            email: res.email
        }
        setData({ ...data, user: { ...data.user, ...newUser, isLogedIn: true } })

        if (redirect) {
            history.replace(from)
        }
    }

    const handleBlr = (e) => {
        const newUser = {
            ...data.user
        }

        newUser[e.target.name] = e.target.value
        setData({ ...data, user: { ...data.user, ...newUser } })
    }

    const handleCreateAccount = (e) => {

        if (page && data.user.email && data.user.confirmPassword ) {
            createUser(data.user.email, data.user.confirmPassword, data.user.name)
                .then(res => {
                    console.log(res);
                    handleResponse(res, true)
                })
        }
        if (!page && data.user.email && data.user.password) {
            loginUser(data.user.email, data.user.password)
                .then(res => {
                    console.log(res);
                    handleResponse(res, true)
                })
        }
        e.preventDefault();
        
    }

    return (
        <div className="auth_section">
            <Container>
                <div className="auth_area">
                    <div className="auth">
                        <div className="auth_logo">
                            <img src={logo} alt="" />
                        </div>
                        <form action="" onSubmit={handleCreateAccount}>
                            {page ?
                                <SignUp handleBlr={handleBlr} /> :
                                <Login handleBlr={handleBlr} />
                            }
                            {
                                page ? <p style={{ color: 'red', textAlign: 'center' }} onClick={() => setPage(false)}>Alrady Have An Account</p> :
                                    <p style={{ color: 'red', textAlign: 'center' }} onClick={() => setPage(true)}>Create New Account</p>
                            }


                        </form>
                        {
                            !page && <OthersLogin handleGoogleSignIn={handleGoogleSignIn} />
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};


export default Authentication;