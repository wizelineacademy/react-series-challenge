import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Favorites from './components/Favorites';
import logo from './logo.svg';
import './App.css';
import { Title, Wrapper, TheApp } from './App.style.js'

class App extends Component {
  
  render() {
    return (
      <Wrapper>
        <TheApp>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Title>DOCTOR GIF</Title>
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
        </TheApp>
      </Wrapper>
    );
  }
}

export default App;
