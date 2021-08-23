
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from "./components/Home/Home/Home";
import Login from './components/Login/Login';
import NoMatch from "./components/NoMatch/NoMatch";




function App() {



  return (
    <Router>
      <Switch>
        <Route path="/Dashboard">
          <Dashboard/>
        </Route>
        <Route path="/login">
          <Login/>
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
