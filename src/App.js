
import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext()
function App() {
  const [count, setCount] = useState(0);

  return (
    <CategoryContext.Provider value={count} >
      <p>count Value: {count}</p>
      <Header count={count} setCount={setCount} />
      <Home count={count} />
      <Shipment />
    </CategoryContext.Provider>
  );
}

export default App;
