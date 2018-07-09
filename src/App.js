import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/home';
import Favorites from './components/favorites';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/favorites">Favorites</Link>
                </li>
              </ul>
            </header>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/favorites" component={Favorites} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
