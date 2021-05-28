
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'

function App() {
  const [cart, setCart] = useState([])
  return (
    <div >
      <Header cart={cart}/>
      <Shop cart={cart} setCart={setCart}/>
    </div>
  );
}

export default App;
