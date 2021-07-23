import { Button, Container, Grid, Typography } from '@material-ui/core';
import docAppoinment from '../../../data/docAppoinment';
import './Appoinment.scss'

const Appoinment = () => {
    const {id, title, body, img}= docAppoinment[0]
    return (
        <div className="appinment_doc_area ">
            <Container>
                <div className="appoinment_doc_container">
                    <Grid container spacing={6}>
                        <Grid item md={5}>
                            <div className="appinment_doc_img">
                                <img src={img} alt="" />
                            </div>
                        </Grid>
                        <Grid item md={7}>
                            <div className="appoinment_doc_detail">
                                <div className="section_heading">
                                    <Typography variant='h5' className="heading_top">Appoinment</Typography>
                                    <Typography variant='h3' className="main_heading">{title}</Typography>
                                </div>
                                <Typography paragraph={true}>{body}</Typography>
                                <Button variant="contained" id="gradient_btn">Learn More</Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default Appoinment;