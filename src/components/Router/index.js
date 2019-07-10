import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Signup from '../Signup';
import Confirm from '../Confirm';
import Login from '../Login';
import Home from '../Home';
import Header from '../Header';
import GuardedRoute, { userExists, userIsLoggedIn } from '../GuardedRoute';

const Router = () =>
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/signup" component={Signup} />
      <GuardedRoute path="/confirm" component={Confirm} guard={userExists} />
      <Route path="/login" component={Login} />
      <GuardedRoute path="/" component={Home} guard={userIsLoggedIn} />
    </Switch>
  </BrowserRouter>
;

export default Router;