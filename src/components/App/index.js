import React from 'react';

import Router from '../Router';
import { AuthProvider } from '../../contexts/AuthContext';
import { UserProvider } from '../../contexts/UserContext';

const App = () =>
  <div className="App">
    <UserProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </UserProvider>
  </div>
;

export default App;
