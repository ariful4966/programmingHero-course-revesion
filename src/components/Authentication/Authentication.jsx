import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container } from '@material-ui/core';
import logo from '../../images/logo2.png';
import './Login.scss'
import SignUp from './SignUp';
import Login from './Login';
import OthersLogin from './OthersLogin';
import { googleSignIn, signOut } from './AuthenticationManager';
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
                const { name, email, photo } = data.user;
                const getUser = {
                    name: res.displayName,
                    email: res.email,
                    photo: res.photoURL
                }

                setData({ ...data, user: { ...data.user, ...getUser, isLogedIn: true } })

                history.replace(from);
            })
    }

    return (
        <div className="auth_section">
            <Container>
                <div className="auth_area">
                    <div className="auth">
                        <div className="auth_logo">
                            <img src={logo} alt="" />
                        </div>
                        <form action="">
                            {page ?
                                <SignUp /> :
                                <Login />
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