import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { paths } from './utils'
import { Home } from './components'

const Routes = () => (
  <Router>
    <Switch>
      <Route path={paths.HOME} render={Home} />
    </Switch>
  </Router>
)

export default Routes
