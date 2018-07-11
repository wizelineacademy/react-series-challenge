import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';
import actions from './actions';
import { Wrap } from './App.style';
import './global.style';

class App extends Component {
  componentDidMount() {
    this.props.loadFavoritesR();
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Wrap>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/favorites" component={Favorites} />
              <Redirect to="/not-found" />
            </Switch>
          </Wrap>
        </Fragment>
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

export { App };
