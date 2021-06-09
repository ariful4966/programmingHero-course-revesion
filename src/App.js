
import { useState, useEffect, createContext } from 'react';
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
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';

export const UserContext = createContext()

function App() {
  const [products, setProducts] = useState([]);
  const[loggedInUser, setLoggedInUser]=useState({})

  const [cart, setCart] = useState([])
  useEffect(() => {
    const first10 = fakeData.slice(0, 10)
    setProducts(first10)
  }, [])
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router >
      <h3>email: {loggedInUser.email}</h3>
      <Header cart={cart} products={products} />
      <Switch>
        <Route path="/shop">
          <Shop cart={cart} products={products} setCart={setCart} />
        </Route>
        <Route path="/review">
          <Review products={fakeData} />
        </Route>
        <Route path="/manage">
          <ManageInventory />
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/shipment">
          <Shipment/>
        </Route>
        <Route path="/manage">
          <ManageInventory />
        </Route>
        <Route path="/product/:pdKey">
          <ProductDetail cart={cart} products={products} setCart={setCart} />
        </Route>
        <Route exact path="/">
          <Shop cart={cart} products={products} setCart={setCart} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
