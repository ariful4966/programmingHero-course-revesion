import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useEffect, useState } from 'react';


function App() {
  const [isLike, setIsLike] = useState(' ');
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser]=useState({});
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))

    //single User
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setSingleUser(data))

    //Random User
    fetch('https://randomuser.me/api')
    .then(res=>res.json())
    .then(data=>setRandomUser(data.results[0]))
  }, [])
  return (
    <div className="App">
      <AccessAlarmIcon />
      <ThumbUpAltIcon onClick={() => setIsLike(isLike ? '' : 'primary')} color={isLike} />
      <h1>Name: {singleUser.name}</h1>
      <h2>Random Gender: {randomUser.name?.first}- {randomUser.email}</h2>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  );
}

export default App;
