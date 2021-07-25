import { Container, Grid, Typography } from '@material-ui/core';
import doctors from '../../../data/doctors';
import PhoneIcon from '@material-ui/icons/Phone';
import './Doctors.scss'

const Doctors = () => {
    return (
        <div className="doctors_area ">
            <Container>
                <div className="doctors_container">
                    <div className="section_heading">
                        <Typography variant='h5' className="heading_top">Our Doctors</Typography>
                    </div>
                    <div className="doctors_content">
                        <Grid container spacing={6}>
                            {
                                doctors.map(ts =>
                                    <Grid item md={4} key={ts.key} >
                                        <div className="single_doctors">

                                            <div className="doctors_creator">
                                                <div className="doctor_img">
                                                    <img src={ts.image} alt="" />
                                                </div>
                                                <div className="doctor_info">
                                                    <Typography variant="h6">Dr. {ts.name}</Typography>
                                                    <Typography paragraph={true}><PhoneIcon/> {ts.phone}</Typography>
                                                </div>
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

export default Doctors;