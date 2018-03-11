import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { paths } from './utils'
import { Home } from './containers'

const Routes = () => (
  <Router>
    <Switch>
      <Route path={paths.HOME} component={Home} />
    </Switch>
  </Router>
)

export default Routes
