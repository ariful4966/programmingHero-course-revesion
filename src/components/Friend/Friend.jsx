import React from 'react';
import CartFriend from '../CartFriend/CartFriend';

const Friend = (props) => {
    const { users, friends, handleUnFriend } = props;
    const incomeAmount = friends.reduce((total, friend) => total + (friend ? friend.income : 0), 0)
    return (
        <div>
            <h2>Total Users: {users.length}</h2>
            <h4>Total Friends: {friends.length}</h4>
            <p>Total Income Of Friends: ${incomeAmount ? incomeAmount : 0}</p>
            <div>
                {
                    friends.length > 0 &&
                    friends.map((friend, index) => <CartFriend key={index} friend={friend} handleUnFriend={handleUnFriend}></CartFriend>)


                }
            </div>
        </div>
    );
};

export default Friend;