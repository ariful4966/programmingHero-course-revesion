import { createContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from 'jwt-decode'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Appoinment from "./components/Appointment/Appoinment/Appoinment";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Allpatients from "./components/Dashboard/AllPatients/Allpatients";
import Doctor from "./components/Dashboard/Doctor/Doctor";
import Appointment from "./components/Dashboard/Appointment/Appointment";
import NotMatch from "./components/Shared/NotMatch/NotMatch";

export const UserContext = createContext()
function App() {
  const [existingUser, setExistingUser] = useState({
    name: '',
    email:'',
    isLogin: false
  })
  useEffect(()=>{
    if(existingUser.isLogin === false){
      const token = sessionStorage.getItem('userToken');
      if(token){
        const {name, email} = jwt_decode(token)
        setExistingUser({
          name,
          email,
          isLogin: true
        })
      }
    }
  }, [existingUser])


  return (
    <UserContext.Provider value={[existingUser, setExistingUser]} >
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard/doctor">
            <Doctor />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/appointment">
            <Appointment />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/patients">
            <Allpatients />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/patient/appointment">
            <Appoinment />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatch/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
