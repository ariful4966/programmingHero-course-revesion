import { Container } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import NotMatch from './components/NotMatch/NotMatch';
import RoomDetail from './components/Room/RoomDetail';
import { createContext, useEffect, useState } from 'react';
import { roomsData } from './data'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';


export const RoomData = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [rooms, setRooms] = useState([]);
  const [bookRoom, setBookRoom] = useState([])
  useEffect(() => {
    const data = roomsData;
    setRooms(data)
  }, []);
  const data = [rooms, bookRoom, setBookRoom, loggedInUser, setLoggedInUser];


  return (
    
    <RoomData.Provider value={data}>
      <p>Name: {loggedInUser.name}</p>
      <Router>
        <Header />
        <Container>

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/room/:id">
              <RoomDetail></RoomDetail>
            </Route>
            <PrivateRoute path="/book/:bedType">
              <Book />
            </PrivateRoute>
            <Route path="/book">
              <Book />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotMatch />
            </Route>
          </Switch>
        </Container>
      </Router>
    </RoomData.Provider>
  );
}

export default App;
