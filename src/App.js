import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Link,
  NavLink,
  Switch,
  withRouter,
} from 'react-router-dom';

import MainNav from './components/NavMain';

import ViewHome from './views/Home';
import ViewFavorites from './views/Favorites';

class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <Route exact path="/your-favorites" component={ViewFavorites} />
        <Route exact path="/" component={ViewHome} />
      </div>
    );
  }
}

export default App;
