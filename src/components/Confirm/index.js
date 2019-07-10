import React, { useContext } from 'react';

import AuthContext from '../../contexts/AuthContext';
import UserContext from '../../contexts/UserContext';
import { authenticateToken } from '../../utilities/auth';
import { useForm, e, eVal } from '../../utilities/form';

const Confirm = () => {
  const [ { email } ] = useContext(UserContext);
  // eslint-disable-next-line
  const [ __, setIsAuthenticated ] = useContext(AuthContext);
  const [ { token }, { isLoading }, submit, reset ] = useForm({ token: '' });

  const handleSubmit = e(async () => {
    const authedUser = await submit(({ token }) => authenticateToken({ email, token }));
    authedUser && setIsAuthenticated(true);
  });

  return (
    <form onSubmit={handleSubmit} onReset={e(reset)}>
      <label htmlFor="token">Confirmation Token</label>
      <input
        type="number"
        name="token"
        value={token.value}
        onChange={eVal(token.set)}
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading} >Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default Confirm;
