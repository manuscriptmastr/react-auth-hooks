import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { authenticateUser } from '../../utilities/auth';
import AuthContext from '../../contexts/AuthContext';
import { useForm, e, eVal } from '../../utilities/form';

const Login = () => {
  const [ { isAuthenticated }, setAuthStatus ] = useContext(AuthContext);
  const [
    { email, password },
    { isLoading },
    submit,
    reset
  ] = useForm({ email: '', password: '' });

  const handleSubmit = e(async () => (await submit(authenticateUser)) && setAuthStatus({ type: 'USER_AUTHENTICATED' }));

  return (
    isAuthenticated
    ? <Redirect to="/" />
    : <form onSubmit={handleSubmit} onReset={e(reset)} >
        <label htmlFor="email" >Email</label>
        <input
          type="email"
          name="email"
          value={email.value}
          disabled={isLoading}
          onChange={eVal(email.set)}
        />
        <label htmlFor="password" >Password</label>
        <input
          type="password"
          name="password"
          value={password.value}
          disabled={isLoading}
          onChange={eVal(password.set)}
        />
        <button type="submit" disabled={isLoading} >Submit</button>
        <button type="reset">Reset</button>
      </form>
  );
};

export default Login;
