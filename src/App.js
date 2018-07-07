import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Redirect, Link, NavLink, Switch, withRouter, } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <div >
              <button><NavLink to="/Search" activeClass="active">Search</NavLink></button>
              <button><NavLink to="/Favorites" activeClass="active">Favorites</NavLink></button>
            </div>
          </header>

          <Switch>
              <Route path="/Search" component={Home}  />
              <Route path="/Favorites" render={()=> 
                                          <p className="App-intro">
                                            Welcome to Favorites.
                                          </p>}  />
          </Switch>
          
        </div>
      </Provider>
    );
  }
}

export default App;
