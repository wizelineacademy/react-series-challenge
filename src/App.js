import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';

import MainHeader from './components/MainHeader';

import ViewHome from './views/Home';
import ViewFavorites from './views/Favorites';

class App extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <Route exact path="/your-favorites" component={ViewFavorites} />
        <Route exact path="/" component={ViewHome} />
      </div>
    );
  }
}

export default App;
