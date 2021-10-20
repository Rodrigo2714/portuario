import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../views/home';
import Container from '../views/container';
import Movimentation from '../views/movimentation';

const Content = () => {
  return (
    <div>
      <Switch>
        <Route path="/container">
          <Container />
        </Route>
        <Route path="/movimentation">
          <Movimentation />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;