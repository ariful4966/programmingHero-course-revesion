import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotMatch = () => {
    return (
        <div className="notMatch">
            <Container>
                <div className="d-flex justify-content-center align-items-center " style={{height:'100vh'}}>
                    <div className="not_found text-center">
                        <h1 className="text-brand" style={{fontSize:'170px', textShadow: ' 1px 0 #000'}}>404</h1>
                        <p style={{fontSize:"50px", color:'purple'}}>Sorry! Page Not Found <Link to="/">Back Home</Link></p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NotMatch;