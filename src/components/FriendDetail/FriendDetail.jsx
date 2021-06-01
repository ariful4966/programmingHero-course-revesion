import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { id } = useParams()
    const [friend, setFriend] = useState({});
    const { name, email, phone, website } = friend
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, []);

    return (
        <div>
            <p>Friend Detail Component: {id}</p>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>

        </div>
    );
};

export default FriendDetail;