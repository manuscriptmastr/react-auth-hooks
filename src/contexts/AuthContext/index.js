import React, { createContext } from 'react';

import { useLocalStorage } from '../../utilities/persist';

const AuthContext = createContext();

export const AuthProvider = ({ children }) =>
  <AuthContext.Provider
    value={useLocalStorage('auth', false)}
  >
    {children}
  </AuthContext.Provider>
;

export default AuthContext;
