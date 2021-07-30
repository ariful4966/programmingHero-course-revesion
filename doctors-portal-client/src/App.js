
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import AppoinmentPage from './components/pages/AppoinmentPage/AppoinmentPage';
import Auth from './components/pages/Auth/Auth';
import PrivateRoute from './components/pages/Auth/authManeger';
import Dashboard from './components/pages/Dashboard';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { allCategoris } from './redux/action/action';

function App(props) {
  console.log(props);
  const { allCategoris }=props;
  useEffect(() => {
    fetch('http://localhost:4000/categoris')
      .then(res => res.json())
      .then(data => {
        allCategoris(data)
      })
  }, [])
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/appoinment">
          <AppoinmentPage />
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route path="/login">
          <Auth />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => {
  return state
}
const mapDispatchToProps = {
  allCategoris
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
