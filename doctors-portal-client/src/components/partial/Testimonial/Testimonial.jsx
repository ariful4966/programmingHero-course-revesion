import { Container, Grid, Typography } from '@material-ui/core';
import testimonial from '../../../data/testimonial';
import './Testimonial.scss'

const Testimonial = () => {
    return (
        <div className="testimonial_area ">
            <Container>
                <div className="testimonial_container">
                    <div className="section_heading">
                        <Typography variant='h5' className="heading_top">Appoinment</Typography>
                        <Typography variant='h3' className="main_heading">What's Our Patient's Say</Typography>
                    </div>
                    <div className="testimonial_content">
                        <Grid container spacing={6}>
                            {
                                testimonial.map(ts =>
                                    <Grid item md={4} key={ts.key} >
                                        <div className="single_testmonial">
                                        <div className="testmonial_comment_body" >
                                            <Typography paragraph={true} >{ts.comment}</Typography>
                                        </div>
                                        <div className="testmonial_commenter">
                                            <Grid container spacing={4} alignItems="center">
                                                <Grid item md={4} className="commenter_img">
                                                    <img src={ts.image} alt="" />
                                                </Grid>
                                                <Grid item md={8} className="commenter_info">
                                                    <Typography variant="h6">{ts.name}</Typography>
                                                    <Typography paragraph={true}>{ts.address}</Typography>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        </div>

                                    </Grid>
                                )
                            }
                        </Grid>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Testimonial;