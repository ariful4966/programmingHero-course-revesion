import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
        width: '100%',
        textAlign: 'center'
    },
    media: {
        height: 250,
        width: 250,
        margin: '0 auto'
    },
});

 function FoodItem(props) {
    const classes = useStyles();
    console.log(props);
    const {food, showDetail}=props;
    const { id, title, img, shotTitle, price } = food;
    const { img1, img2 } = img
    return (
        <Grid item md={4}>
            <Card className={classes.root} onClick={()=>showDetail(id)}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={img1}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h6">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {shotTitle}
                        </Typography>
                        <Typography gutterBottom variant="h4" component="h2">
                            ${price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default FoodItem;
