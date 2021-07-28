
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
import PrivateRoute  from './components/pages/Auth/authManeger';
import Dashboard from './components/pages/Dashboard';

function App() {
  
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/appoinment">
          <AppoinmentPage/>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
        <Route path="/login">
          <Auth/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*"> 
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
