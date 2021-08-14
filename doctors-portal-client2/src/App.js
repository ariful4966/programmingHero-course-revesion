import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import './App.css';
import Appoinment from "./components/Appointment/Appoinment/Appoinment";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";

export const UserContext = createContext()
function App() {
  const [existingUser, setExistingUser] = useState({
    name: '',
    email: '',
    isLogin: false
  })
  useEffect(() => {
    const userToken = sessionStorage.getItem('userToken')
    if (userToken) {
      const { name, email } = jwt_decode(userToken)
      setExistingUser({
        email,
        name,
        isLogin: true
      })
    }

  }, [])
  console.log(existingUser);

  return (
    <UserContext.Provider value={existingUser} >
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/appoinment">
            <Appoinment />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
