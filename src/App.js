import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink, Switch } from "react-router-dom";
import Home from './components/Home';
import Favorites from './components/Favorites';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './actions';
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
              <header>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/favorites">Favorites</NavLink>
                  </li>
                </ul>
              </header>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/favorites" component={Favorites} />
                <Redirect to="/" />
              </Switch>
            </div>
          </Router>
        </TheApp>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  const { loadFavoritesR } = actions;
  return bindActionCreators({ loadFavoritesR }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
