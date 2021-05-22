import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import data from './data'
import User from './components/User/User';
import Friend from './components/Friend/Friend';

function App() {
  const [users, setUsers] = useState([])
  const [friends, setFriends] = useState([])
  const total = users.length
  console.log(friends);
  useEffect(() => {
    setUsers(data)
  }, [])

  const addFriend = (friend) => {
    const findFrd = friends.find(fd => fd.id === friend.id)
    if (!findFrd) {
      const newFriend = [...friends, friend];
      setFriends(newFriend)
    } 

  }
  const handleUnFriend = (frd) => {
    const fdid = frd.id
    const unfriend = friends.filter(friend => friend.id !== fdid);
    console.log(unfriend, fdid);
    setFriends(unfriend)
  }

  return (
    <div className="container">

      <div className="view-info">
        <div className="users">
          {
            users.map((user, index) => <User user={user} key={user.id} friends={friends} addFriend={addFriend}></User>)
          }
        </div>
        <div className="cart-info">
          <Friend users={users} friends={friends} handleUnFriend={handleUnFriend} ></Friend>
        </div>
      </div>
    </div>
  );
}

export default App;
