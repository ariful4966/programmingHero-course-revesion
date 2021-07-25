import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const BannerInfo = () => {
    const history = useHistory();
    const getAppoinment =()=>{
        history.push('/appoinment')
    }
    return (
        <div className="banner_info">
            <Typography variant="h2"  >Your New Smile Stater Here</Typography>
            <Typography paragraph={true}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquid minus exercitationem dicta, numquam aperiam hic tempora, quas magnam ullam harum id dolores vitae consequuntur voluptatibus praesentium? Porro, quia cupiditate?</Typography>
            <Button variant="contained" id="gradient_btn" onClick={getAppoinment}>Get Apoinment</Button>
        </div>
    );
};

export default BannerInfo;