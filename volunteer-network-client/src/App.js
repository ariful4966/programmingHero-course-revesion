import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import EventTask from './components/pages/EventTask/EventTask';
import Home from './components/pages/Home/Home';
import Registation from './components/pages/Registation/Registation';
import Header from './components/partials/Header/Header';
import { allCategory } from './redux/actions';

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
      <Header />
      <Switch>
        <Route path="/registation/:catKey">
          <Registation />
        </Route>
        <Route path="/events">
          <EventTask/>
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
