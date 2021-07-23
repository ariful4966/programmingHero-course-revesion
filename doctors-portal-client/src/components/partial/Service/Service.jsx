import { Container, Typography } from '@material-ui/core';
import "./Service.scss";

const Service = () => {
    return (
        <section className="service_area">
            <Container>
                <div className="section_heading">
                    <Typography variant="h5" className="heading_top">Our Services</Typography>
                    <Typography variant="h3" className="main_heading">Service We Provide</Typography >
                </div>

            </Container>
        </section>
    );
};

export default Service;