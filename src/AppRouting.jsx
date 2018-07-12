import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Trending, Favorite } from './components';

const AppRouting = () => (
  <Switch>
    <Route path="/trending" component={Trending} />
    <Route path="/favorite" component={Favorite} />
    <Redirect to="/trending" />
  </Switch>
);

export default AppRouting;
