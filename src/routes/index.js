import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import Favorites from '../components/Favorites'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/favorites" component={Favorites}/>
      </Switch>
    </BrowserRouter>
  )
}
