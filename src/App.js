import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import Auth from "./components/Pages/Auth/Auth";
import PrivateRoute from "./components/Pages/Auth/PrivateRoute";
import Booking from "./components/Pages/Booking/Booking";
import BookingRoom from "./components/Pages/BookingRoom/BookingRoom";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";
function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/booking/:bkId">
          <Booking />
        </PrivateRoute>
        <Route path="/place/:title">
          <BookingRoom/>
        </Route>
        <Route path="/auth">
          <Auth/>
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

export default App;
