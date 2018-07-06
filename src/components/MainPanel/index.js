import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import FavoritesPanel from './FavoritesPanel';
import ExplorePanel from './ExplorePanel';

const MainPanel = (props) => (
  <Switch>
    <Route path="/explore" component={ExplorePanel} />
    <Route path="/favorites" component={FavoritesPanel} />
    <Redirect to="/explore" />
  </Switch>
)

export default MainPanel;