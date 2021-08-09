
import { useState, useEffect, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [products, setProducts] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({})

  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('https://ema-john-server4082.herokuapp.com/products')
      .then(res => res.json())
      .then(data => {

        const shuffle = a => {
          for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
          }
        }

        shuffle(data);
        setProducts(data)
      });



  }, [])
  const product10 = products.slice(0, 10)
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router >
        <Header cart={cart} products={products} />
        <Switch>
          <Route path="/shop">
            <Shop cart={cart} products={product10} setCart={setCart} />
          </Route>
          <Route path="/review">
            <Review products={fakeData} />
          </Route>
          <PrivateRoute path="/orders">
            <ManageInventory />
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment />
          </PrivateRoute>
          <Route path="/orders">
            <ManageInventory />
          </Route>
          <Route path="/product/:pdKey">
            <ProductDetail cart={cart} products={products} setCart={setCart} />
          </Route>
          <Route exact path="/">
            <Shop cart={cart} products={product10} setCart={setCart} />
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
