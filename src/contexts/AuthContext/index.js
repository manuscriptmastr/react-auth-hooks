import React, { createContext } from 'react';

import { useLocalStorage } from '../../utilities/persist';

const INITIAL_STATE = {
  userExists: false,
  isAuthenticated: false
};

const reducer = (state, action) => {
  switch (action.type) {

    case 'USER_NONEXISTENT':
      return {
        ...state,
        userExists: false,
        isAuthenticated: false
      };
    case 'USER_EXISTS':
      return {
        ...state,
        userExists: true,
        isAuthenticated: false
      };
    case 'USER_AUTHENTICATED':
      return {
        ...state,
        userExists: true,
        isAuthenticated: true
      };
    default:
      return {
        ...state,
        userExists: false,
        isAuthenticated: false
      };
  }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [ state, dispatch ] = useLocalStorage('auth', INITIAL_STATE, reducer);

  return (
    <AuthContext.Provider
      value={[ state, dispatch ]}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
