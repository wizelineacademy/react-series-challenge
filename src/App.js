import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/header';
import Home from 'components/home';
import Favorites from 'components/favorites';
import { Provider } from 'react-redux';
import store from 'store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
