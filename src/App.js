import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Redirect, NavLink, Switch, } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Favorites from './components/Favorites';

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
              <Route path="/Favorites" component={Favorites}/>
              <Redirect to={{
                pathname: "/Search",
                state: { from: 'NOT FOUND PAGE' },
              }} />
          </Switch>
          
        </div>
      </Provider>
    );
  }
}

export default App;
