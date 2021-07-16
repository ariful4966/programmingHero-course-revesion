import { Grid } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { RoomData } from '../../App'
import Room from '../Room/Room';

const Home = () => {
    const [rooms] = useContext(RoomData)
    return (
        <div>
            <h1>This is Home Page</h1>
            <Grid container spacing={3}>
                {
                    rooms.map((rm, idx) =>
                        <Grid key={idx} md={4}>
                            <Room room={rm}></Room>
                        </Grid>
                    )
                }
            </Grid>
        </div>
    );
};

export default Home;