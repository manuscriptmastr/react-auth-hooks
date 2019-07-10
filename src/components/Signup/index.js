import React, { useContext } from 'react';

import { createNewUser } from '../../utilities/auth';
import UserContext from '../../contexts/UserContext';
import { useForm, e, eVal } from '../../utilities/form';

const Signup = () => {
  // eslint-disable-next-line
  const [ __, setUser ] = useContext(UserContext);
  const [
    { username, email, password },
    { isLoading },
    submit,
    reset
  ] = useForm({ username: '', email: '', password: '' });

  const handleSubmit = e(async () => {
    const authedUser = await submit(createNewUser);
    authedUser && setUser(authedUser);
  });

  return (
    <form onSubmit={handleSubmit} onReset={e(reset)}>
      <h2>Signup</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={username.value}
        onChange={eVal(username.set)}
        disabled={isLoading}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={email.value}
        onChange={eVal(email.set)}
        disabled={isLoading}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password.value}
        onChange={eVal(password.set)}
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading}>Submit</button>
      <button type="reset">Reset</button>
    </form>
  )
};

export default Signup;
