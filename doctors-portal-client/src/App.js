
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
        <Route path=""> 
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
