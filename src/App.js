import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Friend from './components/Friend';

function App() {
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
}

export default App;
