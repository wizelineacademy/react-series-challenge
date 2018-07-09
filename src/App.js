import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

// Store
import store from "./store";

// Components
import Gifs from "./components/Gifs/Gifs";
import SearchResult from "./components/SearchResult/SearchResult";
import Favorites from './components/Favorites/Favorites';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Gifs} />
            <Route exact path="/search/:q" component={SearchResult} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
