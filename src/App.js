import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'
import { Route, NavLink, Switch } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Page404 from './components/Page404'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h1>React Challenge</h1>
          <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/">Home</NavLink></li>            
          </ul>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route component={Page404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
