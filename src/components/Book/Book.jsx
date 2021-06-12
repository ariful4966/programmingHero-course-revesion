import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RoomData } from '../../App';

const Book = () => {
    const { bedType } = useParams();
    const  [rooms]  = useContext(RoomData);
    const matchRooms = rooms.filter(rm => rm.bedType === bedType)
    return (
        <div>
            <h1>This is book page {bedType}</h1>
            {
                matchRooms.map(mr => <li>{mr.title}</li>)
            }
        </div>
    );
};

export default Book;