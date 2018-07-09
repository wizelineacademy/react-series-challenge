import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Trending, Favorite } from './components';

const AppRouting = () => (
  <Router>
    <Switch>
      <Route path="/trending" component={Trending} />
      <Route path="/favorite" component={Favorite} />
      <Redirect to="/trending" />
    </Switch>
  </Router>
);

export default AppRouting;
