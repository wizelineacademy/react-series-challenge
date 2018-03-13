import React from 'react';
import { Switch, Route } from 'react-router'
import Home from '../../pages/Home';
import Favorites from '../../pages/Favorites';
import View from '../../pages/View';
import NotFound from '../../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/favorites" component={Favorites}/>
    <Route path="/view/:gif" component={View}/>
    <Route path="*" component={NotFound}/>
  </Switch>
);

export default Routes;
