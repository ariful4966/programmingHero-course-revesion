
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {  useDispatch } from 'react-redux';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from "./components/Home/Home/Home";
import Login from './components/Login/Login';
import NoMatch from "./components/NoMatch/NoMatch";
import {  loginUser,  serviceData } from './redux/action';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import PrivateRoute from './components/Login/PrivateRoute';
import Order from './components/Dashboard/Order/Order';




function App() {
const dispatch = useDispatch();



  useEffect(() => {
    const userToken = sessionStorage.getItem('userToken');
    if (userToken) {
      const decodeToken = jwt_decode(userToken);
      const getTokenUser = {
        name: decodeToken.name,
        email: decodeToken.email,
        photo: decodeToken.picture,
        isLogin: true
      }
      dispatch(loginUser(getTokenUser))
    }

    fetch('https://creative-agency-server82.herokuapp.com/service')
      .then(res => res.json())
      .then(services => {
        dispatch(serviceData(services))
      })
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}



export default App;
