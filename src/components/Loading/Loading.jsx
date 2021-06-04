import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container } from '@material-ui/core';
import './Loading.scss'



export default function Loading() {

    return (
        <div >
            <Container >
                <div className="center">
                    <CircularProgress />
                </div>

            </Container>
        </div>
    );
}
