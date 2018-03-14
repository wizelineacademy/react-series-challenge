import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import { NeonEffect } from './components/Title/style';
import { GifsContainer } from './containers';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="giphy-header">
            <NeonEffect className="App-title">Polaroid Gifs by Guinea</NeonEffect>
          </header>
          <Switch>
            <Route path="/home" component={GifsContainer} />
            <Route path="/search" component={GifsContainer} />
            <Route path="/favorites" component={GifsContainer} />
            <Route path="/gifs/:gif_id" component={GifsContainer} />
            <Redirect to={{
              pathname: "/home",
              state: { from: 'NOT FOUND PAGE' },
            }} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;