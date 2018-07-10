import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';
import actions from './actions';
import { injectGlobal } from 'styled-components';

injectGlobal`
html, body {
  height: 100%;
}
body {
  margin: 0;
  background-color: lightsteelblue;
  background-position: center;
  background-size: cover;
}`;

class App extends Component {
  componentWillMount() {
    this.props.loadFavoritesR();
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/favorites" component={Favorites} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  const { loadFavoritesR } = actions;

  return bindActionCreators({ loadFavoritesR }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(App);
