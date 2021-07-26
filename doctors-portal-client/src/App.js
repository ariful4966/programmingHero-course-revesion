
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import DoctorService from './components/pages/DoctorService/DoctorService';
import Review from './components/pages/Review/Review';
import Blog from './components/pages/Blog/Blog';
import Contact from './components/pages/Contact/Contact';
import AppoinmentPage from './components/pages/AppoinmentPage/AppoinmentPage';
import Auth from './components/pages/Auth/Auth';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/reviews">
          <Review/>
        </Route>
        <Route path="/doctors-service">
          <DoctorService/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/appoinment">
          <AppoinmentPage/>
        </Route>
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
