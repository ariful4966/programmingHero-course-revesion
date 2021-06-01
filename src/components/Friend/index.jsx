import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const { name, email , id} = props.friend;
    const friendsStyle = {
        border: '1px solid gray',
        margin: '40px',
        padding: '20px',
        borderRadius: '10px'
    }
    return (
        <div style={friendsStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>id: <Link to={`/friend/${id}`}>Show Detail of Id: {id}</Link></p>
        </div>
    );
};

export default Friend;