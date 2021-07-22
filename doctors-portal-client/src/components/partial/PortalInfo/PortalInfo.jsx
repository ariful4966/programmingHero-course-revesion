import { Container, Grid, Typography } from '@material-ui/core';
import portalInfo from "../../../data/potalInfo.js";
import './PortalInfo.scss'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import RoomIcon from '@material-ui/icons/Room';
import PhonePausedIcon from '@material-ui/icons/PhonePaused';

const PortalInfo = () => {

    return (
        <div className="portalInfo_area">
            <Container>
                <Grid container spacing={6}>
                    {
                        portalInfo.map(pi =>
                            <Grid item md={4} key={pi.key}>
                                <div className="single_pI">
                                    <Grid container spacing={6}>
                                    <Grid item md={3} >
                                       <img src={pi.img} alt="" />
                                    </Grid>
                                    <Grid item md={9}>
                                        <Typography variant="h6">{pi.title}</Typography>
                                        <Typography paragraph={true}>{pi.body}</Typography>

                                    </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        )
                    }

                </Grid>
            </Container>
        </div>
    );
};

export default PortalInfo;