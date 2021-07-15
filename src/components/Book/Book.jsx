import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RoomData } from '../../App';

const Book = () => {
    const { bedType } = useParams();
    const [rooms, loggedInUser, setLoggedInUser] = useContext(RoomData);
    const matchRooms = rooms.filter(rm => rm.bedType === bedType)
    return (
        <div style={{textAlign:'center'}}>
            <h1> Hello, {loggedInUser.name} Let's! Book a Double Room {bedType}</h1>
            {
                matchRooms.map(mr => <li>{mr.title}</li>)
            }
        </div>
    );
};

export default Book;