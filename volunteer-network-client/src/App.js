import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './components/pages/Home/Home';
import Registation from './components/pages/Registation/Registation';
import Header from './components/partials/Header/Header';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/registation">
            <Registation/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
