import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
