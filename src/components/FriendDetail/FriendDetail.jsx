import React from 'react';
import { useParams } from 'react-router';

const FriendDetail = (props) => {
    const { id } = useParams()

    return (
        <div>
            <h2>Friend Detail Component: {id}</h2>
        </div>
    );
};

export default FriendDetail;