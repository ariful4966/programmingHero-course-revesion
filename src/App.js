import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import FoodDetail from "./components/FoodDetail/FoodDetail";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shipment from "./components/Shipment/Shipment";
import foodData from "./data/foodData";
import Authentication from "./components/Authentication/Authentication";
import { PrivateRoute } from "./components/Authentication/PrivateRoute";


export const Dataprovid = createContext()
function App() {
  const [data, setData] = useState({
    food: foodData,
    lunch: [],
    brakfast: [],
    dinner: [],
    cart: [],
    user: {
      name: '',
      email: '',
      password: '',
      photo: '',
      confirmPassword: '',
      isLogedIn: false,
      isSuccess: false,
      error: ''
    }
  });
  // console.log(data);

  useEffect(() => {
    const lunchData = data.food.filter(ln => ln.category === 'lunch');
    setData({ ...data, lunch: lunchData })
  }, [])

  return (
    <Dataprovid.Provider value={{ data, setData }}>
      <Router>
        <Header />
        <Switch>
          <PrivateRoute path="/shipment">
            <Shipment/>
          </PrivateRoute>
            <Route path="/login">
              <Authentication/>
            </Route>
          <Route path="/food/:fdId">
            <FoodDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Dataprovid.Provider>
  );
}

export default App;
