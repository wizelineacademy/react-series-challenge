import React, { Component } from 'react';
import {
  NavLink,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Home, Favorites } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <header>
            GIPHY challenge
            <ul>
              <li><NavLink to="/Home">Home</NavLink></li>
              <li><NavLink to="/Favorites">Favorites</NavLink></li>
            </ul>
          </header>

          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/Favorites" component={Favorites} />
            <Redirect to="/Home" />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
