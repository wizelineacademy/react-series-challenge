import React from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from '../components/Home'
import Favorites from '../components/Favorites'
import Header from '../components/Header'

export default () => {
  return (
    <BrowserRouter>
      <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/favorites" component={Favorites}/>
        <Redirect to="/"/>
      </Switch>
  </div>
    </BrowserRouter>
  )
}
