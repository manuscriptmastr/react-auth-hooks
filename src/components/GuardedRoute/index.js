import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import UserContext from '../../contexts/UserContext';

const T = () => true;

export const userExists = ({ user }) => !!user.username && !!user.email;
export const userIsLoggedIn = ({ user, isAuthenticated }) => userExists({ user }) && isAuthenticated;

const GuardedRoute = ({ guard = T, redirect = '/login', ...props }) => {
  const [ isAuthenticated ] = useContext(AuthContext);
  const [ user ] = useContext(UserContext);
  return guard({ user, isAuthenticated }) ? <Route {...props} /> : <Redirect to={redirect} />;
};

export default GuardedRoute;
