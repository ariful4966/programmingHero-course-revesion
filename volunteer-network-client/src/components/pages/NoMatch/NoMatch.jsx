import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div>
            <Container>
                <h1>404</h1>
                <p>Sorry! your page not found <Link to="/"> Back Home</Link></p>
            </Container>
        </div>
    );
};

export default NoMatch;