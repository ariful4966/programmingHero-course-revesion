import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import google from '../../images/google.png';
import './Login.css'
import { handleSignWithGoogle } from './loginManeger';

const Login = () => {
    const handleSignIn = ()=>{
        handleSignWithGoogle()
        .then(res=>{
            console.log(res);
        })
    }
    const hanldeLogout = ()=>{

    }
    return (
        <main className="login_area ">
            <Container>
                <div className="login d-flex justify-content-center py-5">
                    <div className="login-card-area py-5">
                        <div className="login-logo mx-auto py-5" style={{width:'200px'}}>
                            <Link to="/">
                                <img src={logo} alt="" className="w-100" />
                            </Link>
                        </div>
                        <div className="login-card ">
                            <Card style={{ width: '500px', height:'400px' }} className="shadow ">
                                <Card.Body className="text-center my-5 ">
                                    <Card.Title style={{fontSize: '40px'}} className="my-4">Login With</Card.Title>
                                    <Button variant="link" onClick={handleSignIn}><img src={google} alt="" /> <span>Continue With Google</span></Button>
                                    <Card.Text>
                                        Don't have Any Account? <Link to="/login">Create Account</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
};

export default Login;