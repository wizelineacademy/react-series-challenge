import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/index';
import GifPage from './components/GifPage/GifPage'
import GifFavorite from './components/GifFavorite/GifFavorite';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div>   
            <header>
                <nav>
                    <ul>
                        <li><NavLink 
                        to = "/home"
                        exact>
                        Home </NavLink></li>
                        <li><NavLink 
                        to = "/favorite"
                        exact>
                        Favorites</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Switch>
              <Route path = "/home" exact component = {GifPage} />
              <Route path = "/favorite" exact component = {GifFavorite} />
              <Redirect from = "/" to = "/home" />
            </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
