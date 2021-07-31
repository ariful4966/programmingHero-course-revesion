import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './components/pages/Home/Home';
import Header from './components/partials/Header/Header';

function App() {
  return (
    <Router>
      <div >
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;
