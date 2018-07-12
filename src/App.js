import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navigation, Link, Main, Layout } from './App.style'
import { Provider } from 'react-redux'
import store from './store'
import React from 'react';


const App = ({ routes }) => {
  /**
   * Get link from given routes
   */
  const links = routes.map(route => <Link key={route.name} to={route.route} exact={route.exact} activeClassName="active" > {route.name} </Link>)
  /**
   * Routes from given routes
   */
  const router = routes.map(route => <Route key={route.name} path={route.route} exact={route.exact} component={route.component} />)
  /**
   * 
   */
  return (
    <Router>
      <Provider store={store} >
        <Layout>
          <Navigation>
            {links}
          </Navigation>
          <Main>
            <Switch>
              {router}
            </Switch>
          </Main>
        </Layout>
      </Provider>
    </Router>
  )
}

export default App;
