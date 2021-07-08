import React from 'react';
import Header from '../../Pertials/Header/Header';
import { Container } from '@material-ui/core';
import SigninForm from './SigninForm';

const Auth = () => {
    return (
        <div>
            <Header/>
            <Container>
                <h1>Login Page</h1>
                <SigninForm/>
            </Container>
        </div>
    );
};

export default Auth;