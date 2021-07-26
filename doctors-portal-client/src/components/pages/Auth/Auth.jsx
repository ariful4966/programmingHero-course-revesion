import React, { useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core'
import Header from '../../partial/Header/Header';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm';
import './Auth.scss'

const Auth = () => {
    const [login, setLogin] = useState(true)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isLogin: false,
        error: ''
    })
    const userBlur = (e) => {
        console.log([e.target.name] = e.target.value);
    }
    return (
        <div className="auth_area">
            <Header />
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={5} className="auth_align">
                        <div className="authentication">
                            <Typography variant="h3">{login ? 'Login' : 'Sign Up'}</Typography>
                            {login ? <LoginForm userBlur={userBlur} setLogin={setLogin} /> : <SignupForm userBlur={userBlur} setLogin={setLogin} />}
                        </div>
                    </Grid>
                    <Grid item md={7}>
                        <div className="auth_banner">
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Auth;