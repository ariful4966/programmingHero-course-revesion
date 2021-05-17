
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Salman', 'Sakib', 'Shuvo']
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' },
    { name: 'Premiere El', price: '$249.99' },

  ];

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <p>I am React Person</p>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Person></Person>
      </header>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    async function data(url) {
      const res = await fetch(url)
      const data = await res.json()
      setUsers(data)
    }
    data(url)
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onMouseUp={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: '#696969',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props) {

  return (
    <div style={{ border: '2px solid blue', width: '400px' }}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
