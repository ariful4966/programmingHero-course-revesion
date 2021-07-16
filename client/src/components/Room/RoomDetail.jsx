import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { RoomData } from '../../App';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 1000,
    },
});

export default function RoomDetail() {
    const classes = useStyles();
    const { id } = useParams();
    
    const [rooms] = useContext(RoomData)
    const view = [...rooms].find(rm => 
         rm.id == id
   );
    console.log(id);
    // const { title, imgUrl } = view;
    if(!view){
        return <CircularProgress />    
    }
    return (
        <Card className={classes.root} className="main-card">
            <CardActionArea className="card-info">
                <CardMedia 
                    component='img'
                    alt="Contemplative Reptile"
                    height="500"
                    image={view.imgUrl}
                    title="Contemplative Reptile"
                    className="card-image"
                />
                <CardContent className="card-detail">
                    <Typography gutterBottom variant="h5" component="h2">
                        {view.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       {view.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
    </Card>
    );
}
