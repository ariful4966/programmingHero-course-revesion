import React from 'react';

const Friend = (props) => {
    const { name, email } = props.friend;
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
        </div>
    );
};

export default Friend;