import React, { Component } from 'react';
import logo from './logo.svg';

import Home from './components/Home';
import Favorites from './components/Favorites';
//import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './App.css';
//require('./.env');

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">DOCTOR GIF</h1>
        </header>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/favorites" component={Favorites} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
