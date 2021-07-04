import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid } from '@material-ui/core';
import './Slider.scss'
import { addDataFilter, addToBook, dataFilter } from '../../../redux/actions/bookingActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AutoPlaySwipeableViews = SwipeableViews
//  autoPlay(SwipeableViews);


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        // backgroundColor: theme.palette.background.default,
    },
    img: {
        height: '300px',
        display: 'flex',
        maxWidth: '100%',
        overflow: 'hidden',
        borderRadius: '10px',
        width: '100%',
    },
}));

const Slider = (props) => {
    console.log(props);
    const { data, book, dataFilter, addToBook, addDataFilter } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const history = useHistory()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    const bookingPage = (id)=>{
        history.push(`/booking/${id}`)
    }

    return (
        <div className={classes.root}>


            <div >
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    <>
                        <Grid container>
                            <Grid item md={5}>
                                <div className="slideInfo">
                                    <Typography variant="h2">{dataFilter.title}</Typography>
                                    <Typography paragraph="true">{dataFilter.body.slice(0, 350)}</Typography>
                                    <Button variant="contained" className="btn-flex" onClick={() => bookingPage(dataFilter.id)}>Booking →</Button>
                                </div>
                            </Grid>
                            <Grid item md={7} container className="allSlideImg">

                                {data.map(item =>
                                    <Grid item md={4} key={item.id}>
                                        <div className={dataFilter.id === item.id ? 'sliderImg activeImg' : 'sliderImg'}>
                                            <img className={classes.img} onClick={() => addDataFilter(item.id)} src={item.photo} alt={item.title} />
                                        </div>
                                    </Grid>
                                )}

                            </Grid>
                        </Grid>
                    </>
                </AutoPlaySwipeableViews>
            </div>

            <MobileStepper
                nextButton={
                    <Button size="small" onClick={handleNext} >
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                }
            />
        </div>
    );
}

const mapStateToProps = state => {
    return state.bookingReducer;
}
const mapDispatchToProps = {
    addToBook: addToBook,
    addDataFilter: addDataFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
