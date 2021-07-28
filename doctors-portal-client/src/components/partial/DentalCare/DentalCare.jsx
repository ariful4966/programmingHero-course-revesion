import { Button, Container, Grid, Typography } from '@material-ui/core';
import dentalCare from '../../../data/dentalCare';
import './DentalCare.scss'

const DentalCare = () => {
    const {id, title, body, img}=dentalCare[0]
    return (
        <div className="dental_care section-padding" >
            <Container>
                <Grid container spacing={6}>
                    <Grid item md={5}>
                        <div className="dentalImg">
                            <img src={img} alt="" />
                        </div>
                    </Grid>
                    <Grid item md={7}>
                        <div className="dental_info">
                            <div className="section_heading">
                                <Typography variant="h3">{title}</Typography>
                            </div>
                            <Typography paragraph={true}>{body}</Typography>
                            <Button variant="contained" id="gradient_btn">Learn More</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default DentalCare;