import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink, Switch } from "react-router-dom";
import Home from './components/Home';
import Favorites from "./Containers/FavPage";
import logo from './66.png';
import pill from './pill.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './actions/home';
import { AppLogo, Pill, TheHeader, TheNav, Navelement, Title, Wrapper, TheApp } from './App.style.js';

class App extends Component {  
  render() {
    return (
      <Wrapper>
        <TheApp>
          <TheHeader>
            <AppLogo src={logo} alt="logo" />
            <Title>DOCTOR GIF</Title>
          </TheHeader>
          <Router>
            <div>
              <TheNav>
                <ul>
                  <Navelement>
                    <NavLink to="/" style={liStyle}><Pill src={pill} alt="pill" />Home</NavLink>
                  </Navelement>
                  <Navelement>
                    <NavLink to="/favorites" style={liStyle}><Pill src={pill} alt="pill" />Favorites</NavLink>
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

let liStyle = {
  color: 'white',
  textDecoration: 'none'
}

const mapDispatchToProps = dispatch => {
  const { loadFavoritesR } = actions;
  return bindActionCreators({ loadFavoritesR }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
