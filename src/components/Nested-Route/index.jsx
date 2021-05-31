import { Container } from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';

const Nested = () => {
  return (
    <Container>
      <h1>Nested Route</h1>
      <Router>
        <nav><a href="/">Home</a></nav>
        <nav><a href="/about">About</a></nav>
        <nav><a href="/contact">Contact</a></nav>
        <Switch>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route exact path ="/">
              <Home/>
            </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default Nested;