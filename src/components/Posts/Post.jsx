import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
import Loading from '../Loading/Loading';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function Post({ post }) {
    const classes = useStyles();
    const { title, body, id } = post;
    const history = useHistory()
    const PostDetails = (id) => {
        history.push(`/post/${id}`)
    }
    if (!post) return <Loading />
    return (
        <Grid item md={12}>
            <Card >
                <CardActionArea>
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" variant="contained" color="primary" onClick={() => PostDetails(`${id}`)}>
                        Show Details
                    </Button>
                </CardActions>

            </Card>
        </Grid>
    );
}
