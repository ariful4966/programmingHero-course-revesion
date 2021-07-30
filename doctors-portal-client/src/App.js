
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
import { allAppoinment, allCategoris, allPatient } from './redux/action/action';

function App(props) {
  const { allCategoris, allAppoinment, setDate, user, dashBoardTab, allPatient } = props;
  useEffect(() => {
    fetch('https://doctors-portal-server82.herokuapp.com/categoris')
      .then(res => res.json())
      .then(data => {
        allCategoris(data)
      })

    fetch('https://doctors-portal-server82.herokuapp.com/appoinments')
      .then(res => res.json())
      .then(data => allAppoinment(data))

    fetch('https://doctors-portal-server82.herokuapp.com/patients')
      .then(res => res.json())
      .then(data => allPatient(data))

  }, [user, setDate, dashBoardTab])
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
  allCategoris,
  allAppoinment,
  allPatient
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
