import React from 'react'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import TrendingContainer from './containers/Trending'
import FavoritesContainer from './containers/Favorites'
import SearchContainer from './containers/Search'
import GifDetailContainer from './containers/GifDetail'
const Routes = () => (
  <Router>
    <Switch>
      <Route path="/gif/:id" component={GifDetailContainer} />
      <Route path="/favorites/search/:term" component={SearchContainer} />
      <Route path="/search/:term" component={SearchContainer} />
      <Route path="/favorites" component={FavoritesContainer} />
      <Route path="/" component={TrendingContainer}  />
      <Redirect to={{
        pathname:"/",
        state: { from: 'PAGE NOT FOUND'},
      }} />
    </Switch>
  </Router>
)

export default Routes
