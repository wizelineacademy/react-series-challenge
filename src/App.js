import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Favorites from './components/Favorites'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/favorites" component={Favorites}/>
          <Route path="/" component={Home}/>
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
