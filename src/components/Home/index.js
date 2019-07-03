import React from 'react';

import { requireAuthStatus } from '../../utilities/auth';

const Home = () =>
  <div>
    <h1>Home page</h1>
  </div>
;

export default requireAuthStatus(Home);
