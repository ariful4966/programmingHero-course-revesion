import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="noMatch bg-banner">
            <Container >
                <div className="notFound-text">
                    <div>
                        <Typography variant='h1'>404</Typography>
                        <Typography paragraph="true">Page Not Fund... Back <Link to="/">Home</Link></Typography>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;