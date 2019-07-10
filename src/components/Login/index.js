import React, { useContext } from 'react';

import { authenticateUser } from '../../utilities/auth';
import AuthContext from '../../contexts/AuthContext';
import UserContext from '../../contexts/UserContext';
import { useForm, e, eVal } from '../../utilities/form';

const Login = () => {
  // eslint-disable-next-line
  const [ _, setIsAuthenticated ] = useContext(AuthContext);
  // eslint-disable-next-line
  const [ __, setUser ] = useContext(UserContext);
  const [
    { email, password },
    { isLoading },
    submit,
    reset
  ] = useForm({ email: '', password: '' });

  const handleSubmit = e(async () => {
    const authedUser = await submit(authenticateUser);
    authedUser && setIsAuthenticated(true);
    authedUser && setUser(authedUser);
  });

  return (
    <form onSubmit={handleSubmit} onReset={e(reset)} >
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
