
import './App.css';

function App() {
  // const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},

]
  return (
    <div className="App">
      <header className="App-header">

        <p>I am React Person</p>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name="Munna" job="football"></Person>
        <Person name="Masum" job="Dorshok"></Person>
        <Person></Person>
      </header>
    </div>
  );
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
  const {name, price}=props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
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
