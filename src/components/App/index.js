import React from 'react';

import Router from '../Router';
import { AuthProvider } from '../../contexts/AuthContext';

const App = () =>
  <div className="App">
    <AuthProvider>
      <Router />
    </AuthProvider>
  </div>
;

export default App;
