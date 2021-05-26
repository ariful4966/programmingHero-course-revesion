
import './App.css';
import { useEffect, useState } from 'react'
import User from './components/Users/User';
import Teem from './components/Teem/Teem';

function App() {
  const [users, setUsers] = useState([]);
  const [teem, setTeem] = useState([])

  const addTeemMember = (member) => {


    const existMember = teem.find(usr => usr.email === member.email);
    if (!existMember && teem.length < 3) {
      setTeem([...teem, member])
    }

  }

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=25')
      .then(res => res.json())
      .then(data => {
        setUsers(data.results)
      })
  }, [])
  return (
    <div className="container">
      <h2>Total user: {users.length}</h2>
      <div className="users-area">
        <div className="user-info">
          {
            users.map((m, idx) => <User key={idx} user={m} addTeemMember={addTeemMember}></User>)
          }
        </div>
        <div className="cart-info">
          <Teem teem={teem} setTeem={setTeem}></Teem>
        </div>
      </div>
    </div>
  );
}

export default App;
