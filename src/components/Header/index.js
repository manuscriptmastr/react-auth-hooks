import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

const Header = () => {
  const [ { isAuthenticated }, dispatch ] = useContext(AuthContext);
  const logout = () => dispatch({ type: 'USER_LOGOUT' });
  const AuthAction = isAuthenticated
    ? <button onClick={logout} >Logout</button>
    : <Link to="/login" >Login</Link>

  return (
    <header>
      {AuthAction}
    </header>
  );
};

export default Header;
