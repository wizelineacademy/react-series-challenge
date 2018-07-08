import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Favorites from './components/Favorites';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/favorites" component={Favorites} />
            </Switch>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
