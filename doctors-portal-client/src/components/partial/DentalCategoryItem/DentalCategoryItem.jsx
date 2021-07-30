import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DailogBox from '../DailogBox/DailogBox';

const useStyles = makeStyles({
    root: {
        minWidth: '100%',
        textAlign: 'center',
        paddingBottom: 20
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function DentalCategoryItem({ categoy }) {
    const classes = useStyles();
    const [dailog, setDailog] = useState(false)

    const dailogToogle = () => {
        setDailog(!dailog)
        // new Date().toTimeString
    };
    console.log(categoy);

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2" className="textColor">
                    {categoy.title}
                </Typography>
                <Typography className={classes.pos} color="standard" variant="h6">
                    <strong>{categoy.startIme}</strong> - <strong>{categoy.endTime}</strong>
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                    {categoy.avilableSpaces === null ? 'No' : categoy.avilableSpaces} Spaces Avilable
                </Typography>
            </CardContent>
            <Button variant="contained" id="gradient_btn" onClick={dailogToogle}>Book Apoinment</Button>
            {
                dailog && <DailogBox category={categoy} open={dailog} toggleBtn={dailogToogle} />
            }
        </Card>
    );
}