import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'
import './App.css';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import {
  StyledTitle
} from './App.style'
import TrendingContainer from './containers/Trending'
import FavoritesContainer from './containers/Favorites'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <StyledTitle>Awesome Gif App</StyledTitle>
          <Switch>
            <Route path="/favorites" component={FavoritesContainer} />
            <Route path="/" component={TrendingContainer}  />
            <Redirect to={{
              pathname:"/",
              state: { from: 'PAGE NOT FOUND'},
            }} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
