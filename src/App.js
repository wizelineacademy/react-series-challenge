import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/header';
import Home from 'components/home';
import Favorites from 'components/favorites';
import { Provider } from 'react-redux';
import store from 'store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/favorites" component={Favorites} />
            <Redirect to="/" />
          </Switch>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
