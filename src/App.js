import React, { Component } from 'react';
//Import Route and Switch Components from react-router-dom
import { Route, Switch } from 'react-router-dom';
import './App.css';

//Import Components
import HomeView from './components/HomeView';
import FavouritesView from './components/FavouritesView';

class App extends Component {
  render() {
    return (
      /**
       * Add a Switch Component to ensure only ONE match
       * Add a HomeView Route -> This will serve as our Homepage
       * Add a FavouritesView Route -> This will render our FavouritesView
       */
      <Switch>
        <Route path='/favourites' component={FavouritesView} />
        <Route path='/' component={HomeView} />
      </Switch>
    );
  }
}

export default App;
