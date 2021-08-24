
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from "./components/Home/Home/Home";
import Login from './components/Login/Login';
import NoMatch from "./components/NoMatch/NoMatch";
import { loginUser, serviceData } from './redux/action';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import PrivateRoute from './components/Login/PrivateRoute';




function App(props) {

  const { user, loginUser, serviceData } = props;

  const lodaData = user.name.length > 0 ? true : false
  useEffect(() => {
    const userToken = sessionStorage.getItem('userToken');
    if (userToken) {
      const decodeToken = jwt_decode(userToken);
      loginUser(decodeToken)
    }


    fetch('http://localhost:5000/service')
      .then(res => res.json())
      .then(services => {
        serviceData(services)
      })
  }, [])

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/Dashboard">
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

const mapStateToProps = state => {
  return state
}
const mapDispatchToProps = {
  loginUser,
  serviceData

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
