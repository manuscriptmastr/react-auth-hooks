import React, { createContext } from 'react';

import { useLocalStorage } from '../../utilities/persist';

const UserContext = createContext();

export const UserProvider = ({ children }) =>
  <UserContext.Provider
    value={useLocalStorage('user', { username: '', email: '' })}
  >
    {children}
  </UserContext.Provider>
;

export default UserContext;
