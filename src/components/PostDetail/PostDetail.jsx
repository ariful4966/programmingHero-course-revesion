import { Button, CardMedia, Container, Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { DataProvide } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import Comment from '../Comments/Comment';
import Loading from '../Loading/Loading';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 500,
    },
});

const PostDetail = () => {
    const classes = useStyles();
    const [post, setPost] = useState({})
    const [showComment, setShowComment] = useState(false)
    const [comments, setComments] = useState([])
    const { id } = useParams();
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])
    const ShowComments = () => {
        setShowComment(!showComment)
    }
    const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    useEffect(() => {
        fetch(commentUrl)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [id])
    if (!post) return <Loading />
    return (
        <Container>
            <Grid item md={12}>
                <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Contemplative Reptile"
                />
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <Button variant="contained" color="primary" onClick={ShowComments}>
                    {
                        showComment ? 'Hide Comments' : 'Show Comments'
                    }
                </Button>

                {
                    showComment && comments.map((comment, idx) => <Comment key={idx} comment={comment}></Comment>)
                }
            </Grid>
        </Container>
    );
};

export default PostDetail;