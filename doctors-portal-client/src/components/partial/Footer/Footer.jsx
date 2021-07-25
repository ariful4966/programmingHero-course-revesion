import { Container, Grid, Typography } from '@material-ui/core';
import FooterWidget from './FooterWidget';
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Footer.scss'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer_area">
            <Container>
                <Grid container spacing={4}>
                    <Grid item md={3}>
                        <div className="footer_widget">
                            <Typography variant="h6" className="textColor">Treatments</Typography>
                            <FooterWidget/>
                        </div>
                    </Grid>
                    <Grid item md={3}>
                        <div className="footer_widget ">
                            <Typography variant="h6" className="textColor">Service</Typography>
                            <FooterWidget/>
                        </div>
                    </Grid>
                    <Grid item md={3}>
                        <div className="footer_widget">
                            <Typography variant="h6" className="textColor">Oral Helth</Typography>
                            <FooterWidget/>
                        </div>
                    </Grid>
                    <Grid item md={3}>
                        <div className="footer_widget">
                            <Typography variant="h6" className="textColor">Our Address</Typography>
                            <Typography>New Youk -1010101 Hudson Yards</Typography>
                            <div className="comunicat_link">
                                <ul>
                                    <Link to="/"><FacebookIcon/></Link>
                                    <Link to="/"><GTranslateIcon/></Link>
                                    <Link to="/"><TwitterIcon/></Link>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div className="footer_bottom">
                <Container>
                    <Typography paragraph={true} align="center" className="textColor"><small>Copyright @arifulislam All Right Reserved</small></Typography>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;