import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function Room({ room }) {
    const { title, description, imgUrl, bed, capacity, bedType, avatar, price, id } = room;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const history = useHistory()
    const handleBook = (bed) => {
      
        history.push(`/book/${bed}`)
    }
    const showDetail = (id)=>{
        history.push(`/room/${id}`)
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                onClick={()=>showDetail(id)}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {avatar}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image={imgUrl}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description.slice(0, 100)}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <LocalHotelIcon /> :{bed}
                </IconButton>
                <IconButton aria-label="share">
                    <EmojiPeopleIcon />: {capacity}
                </IconButton>
                <IconButton aria-label="share">
                    <AttachMoneyIcon />: {price}
                </IconButton>
                <Button variant="contained" color="primary" onClick={() =>  handleBook(bedType) }>
                    Book
                </Button>
            </CardActions>
        </Card>
    );
}
