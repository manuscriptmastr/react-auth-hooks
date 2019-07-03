import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Signup from '../Signup';
import Confirm from '../Confirm';
import Login from '../Login';
import Home from '../Home';
import Header from '../Header';

const Router = () =>
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/confirm" component={Confirm} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
;

export default Router;