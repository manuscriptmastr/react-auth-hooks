import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

const AuthAction = () => {
  // eslint-disable-next-line
  const [ __, setIsAuthenticated ] = useContext(AuthContext);

  return (
    <nav>
      <li>
        <Link to="/signup">Signup</Link> 
        <Link to="/confirm">Confirm</Link>
        <Link to="/login">Login</Link>
        <button onClick={() => setIsAuthenticated(false)}>Logout</button>
      </li>
    </nav>
  );
};

export default AuthAction;
