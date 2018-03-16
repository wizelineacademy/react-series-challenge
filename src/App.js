import React, { Component } from 'react';
import {
  NavLink,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Home, Favorites, Details } from './components';
import { Header } from './components/styled';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header>
            <h1>Giphy Challenge</h1>
            <ul>
              <li><NavLink to="/Home" activeClass="active">Home</NavLink></li>
              <li><NavLink to="/Favorites" activeClass="active">Favorites</NavLink></li>
            </ul>
          </Header>

          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/Favorites" component={Favorites} />
            <Route path="/Details/:id" component={Details} />
            <Redirect to="/Home" />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
