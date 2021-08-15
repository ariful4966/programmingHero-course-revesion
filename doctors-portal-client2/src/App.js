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
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Allpatients from "./components/Dashboard/AllPatients/Allpatients";
import Doctor from "./components/Dashboard/Doctor/Doctor";

export const UserContext = createContext()
function App() {
  const [existingUser, setExistingUser] = useState({
    name: '',
    email: '',
    isLogin: false
  })
  
 
  return (
    <UserContext.Provider value={[existingUser, setExistingUser]} >
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard/doctor">
            <Doctor/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/appointment">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/patients">
            <Allpatients/>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/appointment">
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
