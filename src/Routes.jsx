import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { paths } from './utils'
import { Home, Favorites, Detail } from './containers'

const Routes = () => (
  <Router>
    <Switch>
      <Route path={paths.FAVORITES} component={Favorites} />
      <Route path={`${paths.DETAIL}/:id`} component={Detail} />
      <Route exact path={paths.HOME} component={Home} />
    </Switch>
  </Router>
)

export default Routes
