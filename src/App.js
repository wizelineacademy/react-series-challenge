import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {
  Route,
  Redirect,
  NavLink,
  Switch,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import HomeComponent from './components/HomeComponent';
import FavoritesComponent from './components/FavoritesComponent';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <header>
            <ul>
              <li><NavLink to='/' activeclass='active'><img src={logo} className="App-logo" alt="logo" /></NavLink></li>
              <li><NavLink to='/Home' activeclass='active'>Home</NavLink></li>
              <li><NavLink to='/Favorites' activeclass='active'>Favoritos</NavLink></li>
            </ul>
          </header>
          <Switch>
            <Route exact path='/' component={HomeComponent} />
            <Route exact path='/Home' component={HomeComponent} />
            <Route exact path='/Favorites' component={FavoritesComponent} />
            <Redirect to='/Home' />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
