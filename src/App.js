import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { useEffect, useState } from 'react';

import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Countries from './components/Countries/Countries';
import { Container } from '@material-ui/core';
import CountryDetails from './components/Countries/CountryDetails';
import Navigation from './components/Navigation/Navigation';

function App() {

  return (
    <>
     <Navigation></Navigation>
    <Container>
      <Router>
       
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/country/:cname">
            <CountryDetails/>
          </Route>
          <Route path="/country">
            <Countries />
          </Route>
          <Route path="/friend/:id">
            <FriendDetail />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

      </Router>
    </Container>
    </>
  );
}

export default App;
