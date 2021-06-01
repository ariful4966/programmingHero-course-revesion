import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Friend from '../Friend';

const Home = () => {
    const [friends, setFriends]=useState([])

  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/users')
    .then(data=>setFriends(data.data))
  },[])
  return (
    <div>
      <h2>All Friends: {friends.length}</h2>
      {
        friends.map((friend, idex)=><Friend key={idex} friend={friend}></Friend>)
      }
    </div>
  );
};

export default Home;