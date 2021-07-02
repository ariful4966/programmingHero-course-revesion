import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Home from "./components/Pages/Home/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
