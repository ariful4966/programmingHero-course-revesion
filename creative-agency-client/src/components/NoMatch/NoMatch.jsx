import React from 'react';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <Container>
           <article className="text-center">
           <h1>404</h1>
            <p>Sorry! Your Page is Not Found</p>
            <Link to="/">Back Home</Link>
           </article>
        </Container>
    );
};

export default NoMatch;