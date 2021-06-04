import {  Container, Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { DataProvide } from '../../App';
import Loading from '../Loading/Loading';
import Post from './Post';

const Posts = () => {

    const posts = useContext(DataProvide)
    if(!posts) return <Loading/>
    return (
        <Container>
            <Grid container spacing={3}>
                {
                    posts.map((post, idx) => <Post key={idx} post={post} />)
                }
            </Grid>
        </Container>
    );
};

export default Posts;