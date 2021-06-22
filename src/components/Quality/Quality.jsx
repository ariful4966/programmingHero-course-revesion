import { Container, Grid } from '@material-ui/core';
import React from 'react';
import QualityItem from '../QualityItem/QualityItem';
import qua1 from '../../images/Image/adult-blur-blurred-background-687824.png';
import qua2 from '../../images/Image/chef-cook-food-33614.png';
import qua3 from '../../images/Image/architecture-building-city-2047397.png';

const Quality = () => {
    return (
        <section className="quality_area section-padding">
            <Container>
                <div className="section_heading">
                    <h2>Why You Choose Us</h2>
                    <p>Barton wanted twenty always repair in within we do. An delighted offending <br /> curiolty my is dashwoods at. Boy prosperous increasing surrounded.</p>
                </div>
                <div className="qualitis section-padding">
                    
                    <Grid container spacing={3}>
                        <Grid item  md={4}>
                            <QualityItem quaImg={qua1}/>
                        </Grid>
                        <Grid item md={4}>
                            <QualityItem quaImg={qua2}/>
                        </Grid>
                        <Grid item md={4}>
                            <QualityItem quaImg={qua3}/>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </section>
    );
};

export default Quality;