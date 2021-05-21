import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import data from './data'
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([])
  const total = users.length

  useEffect(()=>{
    setUsers(data)
  },[])
  
  return (
    <div className="container">
      
      <div className="view-info">
        <div className="users">
        {
        users.map((user, index)=><User user={user} key={user.id}></User>)
      }
        </div>
        <div className="cart-info">
          <h2>This is cart</h2>
          <h2>Total DATA: {total}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
