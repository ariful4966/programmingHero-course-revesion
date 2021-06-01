import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email , id} = props.friend;
    const friendsStyle = {
        border: '1px solid gray',
        margin: '40px',
        padding: '20px',
        borderRadius: '10px'
    }
    const history = useHistory()
    const handleClick = (id)=>{
        history.push(`/friend/${id}`)
    }
    return (
        <div style={friendsStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>Show Detail of Id: {id}</Link>
            <button onClick={()=>handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Friend;