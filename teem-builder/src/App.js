
import './App.css';
import { useEffect, useState } from 'react'
import User from './components/Users/User';

function App() {
  const [users, setUsers] = useState([]);
  const [mobile, setMobile] = useState('');

  const showPhoneNumber = (number)=>setMobile(number)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=25')
      .then(res => res.json())
      .then(data => {
        setUsers(data.results)
      })
  }, [])
  return (
    <div className="container">
      <h2>This user: {users.length}</h2>
      <div className="users-area">
        <div className="user-info">
          {
            users.map((m, idx) => <User key={idx} user={m}></User>)
          }
        </div>
        <div className="cart-info"></div>
      </div>
    </div>
  );
}

export default App;
