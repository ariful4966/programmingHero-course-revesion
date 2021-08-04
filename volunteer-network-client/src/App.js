import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import EventTask from './components/pages/EventTask/EventTask';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Registation from './components/pages/Registation/Registation';
import Header from './components/partials/Header/Header';
import { allCategory } from './redux/actions';
import PrivateRoute from './components/pages/Login/LoginManager';
import Volunteers from './components/pages/Volunteers/Volunteers';

function App({ allCategory }) {

  useEffect(() => {
    axios.get('http://localhost:2400/')
      .then(res => {
        const data = res.data
        allCategory(data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <Router>
      
      <Switch>
        <PrivateRoute path="/registation/:catKey">
          <Registation />
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/events">
          <EventTask/>
        </PrivateRoute>
        <Route path="/admin">
          <Volunteers/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => {
  return state
}
const mapDispatchToProps = {
  allCategory
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
