import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Favorites from './components/Favorites';
import logo from './logo.svg';
//import NotFound from './components/NotFound';
import './App.css';

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
