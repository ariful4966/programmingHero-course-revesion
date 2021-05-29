
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import fakeData from './fakeData';
import Review from './components/Review/Review';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  const [products, setProducts] = useState([]);


  const [cart, setCart] = useState([])
  useEffect(() => {
    const first10 = fakeData.slice(0, 10)
    setProducts(first10)
  }, [])
  return (
    <Router >
      <Header cart={cart} products={products} />
      <Switch>
        <Route path="/shop">
          <Shop cart={cart} products={products} setCart={setCart} />
        </Route>
        <Route path="/review">
          <Review products={fakeData}/>
        </Route>
        <Route path="/manage">
          <ManageInventory />
        </Route>
        <Route path="/product/:pdKey">
          <ProductDetail cart={cart} products={products} setCart={setCart}/>
        </Route>
        <Route exact path="/">
          <Shop cart={cart} products={products} setCart={setCart} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
