import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Favorites, Details, Search } from './';

export default () => (
  <div>
    <div>Search</div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/gifs/:id" component={Details} />
        <Route exact path="/search/:text" component={Search} />
      </Switch>
    </Router>
  </div>
);
