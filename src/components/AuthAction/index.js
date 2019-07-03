import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

const AuthAction = () => {
  const [ { isAuthenticated, userExists }, dispatch ] = useContext(AuthContext);

  if (isAuthenticated) {
    return <button onClick={() => dispatch({ type: 'USER_LOGOUT' })}>Logout</button>;
  } else if (!isAuthenticated && userExists) {
    return <Link to="/confirm">Confirm</Link>;
  } else if (!isAuthenticated && !userExists) {
    return <Link to="/signup">Signup</Link>;
  }
  
  return <Link to="/signup">Signup</Link>;
};

export default AuthAction;
