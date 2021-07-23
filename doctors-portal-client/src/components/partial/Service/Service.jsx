import { Container, Grid, Typography } from '@material-ui/core';
import "./Service.scss";
import service from '../../../data/service';

const Service = () => {

    return (
        <section className="service_area">
            <Container>
                <div className="section_heading">
                    <Typography variant="h5" className="heading_top">Our Services</Typography>
                    <Typography variant="h3" className="main_heading">Service We Provide</Typography >
                </div>
                <div className="service_info">
                    <Grid container spacing={6}>
                        {
                            service.map(sv =>
                                <Grid item md={4} key={sv.key}>
                                    <div className="service_container">
                                        <div className="service_info_image">
                                            <img src={sv.img} alt="" />
                                        </div>
                                        <div className="service_info_details">
                                            <Typography variant="h6">{sv.title}</Typography>
                                            <Typography paragraph={true}>{sv.body}</Typography>
                                        </div>
                                    </div>
                                </Grid>
                            )
                        }
                    </Grid>
                </div>
            </Container>
        </section>
    );
};

export default Service;