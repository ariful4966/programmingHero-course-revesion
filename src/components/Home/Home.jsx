import { Container, Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { DataProvide } from '../../App';
import Post from '../Posts/Post';

const Home = () => {
    const posts = useContext(DataProvide);
    const homePost = posts.slice(0, 5)
    return (
        <Container>
             <Grid container spacing={3}>
                {
                    homePost.map((post, idx) => <Post key={idx} post={post} />) 
                }
            </Grid>
        </Container>
    );
};

export default Home;