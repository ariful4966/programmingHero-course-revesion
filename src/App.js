
import { useState } from 'react';
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
function Counter(){
  const [count, setCount] = useState(10);
  return(
    <div>
      <h1>Count: {count}</h1>
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
