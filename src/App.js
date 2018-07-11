import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink, Switch } from "react-router-dom";
import Home from './components/Home';
import Favorites from "./Containers/FavPage";
import logo from './66.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './actions/home';
import { TheHeader, TheNav, Navelement, Title, Wrapper, TheApp } from './App.style.js';

class App extends Component {  
  render() {
    return (
      <Wrapper>
        <TheApp>
          <TheHeader>
            <img src={logo} className="App-logo" alt="logo" />
            <Title>DOCTOR GIF</Title>
          </TheHeader>
          <Router>
            <div>
              <TheNav>
                <ul>
                  <Navelement>
                    <NavLink to="/">Home</NavLink>
                  </Navelement>
                  <Navelement>
                    <NavLink to="/favorites">Favorites</NavLink>
                  </Navelement>
                </ul>
              </TheNav>
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
