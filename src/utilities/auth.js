import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import AuthContext from '../contexts/AuthContext';

const SECRETS = {
  username: 'robocop',
  email: 'me@me.com',
  password: 'abc123',
  token: '12345'
};

const DELAY = 2;

const wait = (sec) => new Promise((resolve) => setTimeout(resolve, sec * 1000));

export const createNewUser = async ({ username, email, password }) => {
  await wait(DELAY);
  const canCreate = email !== SECRETS.email && username !== SECRETS.username;
  if (!canCreate) {
    throw new Error('Email or username already used');
  } else {
    return true;
  }
};

export const authenticateUser = async ({ email = '', password = '' }) => {
  await wait(DELAY);
  const isAuthenticated = email === SECRETS.email && password === SECRETS.password;
  if (!isAuthenticated) {
    throw new Error('Email or password incorrect');
  } else {
    return true;
  }
};

export const authenticateToken = async (token) => {
  await wait(DELAY);
  const hasValidToken = SECRETS.token === token;
  if (!hasValidToken) {
    throw new Error('Token incorrect or expired');
  } else {
    return true;
  }
};

const defaultAuthenticated = ({ isAuthenticated }) => isAuthenticated;

export const requireAuthStatus = (Component, policy = defaultAuthenticated) => (props) => {
  const [ authState ] = useContext(AuthContext);
  return policy(authState) ? <Component {...props} /> : <Redirect to="/login" />;
};
