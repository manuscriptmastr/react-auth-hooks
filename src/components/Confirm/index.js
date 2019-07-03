import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import { authenticateToken, requireAuthStatus } from '../../utilities/auth';
import { useForm, e, eVal } from '../../utilities/form';

const Confirm = () => {
  const [ { isAuthenticated }, setAuthStatus ] = useContext(AuthContext);
  const [ { token }, { isLoading }, submit, reset ] = useForm({ token: '' });

  const handleSubmit = e(async () => (await submit(({ token }) => authenticateToken(token))) && setAuthStatus({ type: 'USER_AUTHENTICATED' }));

  return (
    isAuthenticated
    ? <Redirect to="/" />
    : <form onSubmit={handleSubmit} onReset={e(reset)}>
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

export default requireAuthStatus(Confirm, ({ userExists }) => userExists);
