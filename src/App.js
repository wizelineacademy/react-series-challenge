import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Redirect, NavLink, Switch, } from 'react-router-dom';
import './App.css';
import Home from './components/Views/Home';
import Favorites from './components/Views/Favorites';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to my Challenge</h1>
            <div >
              <button className="button"><NavLink className="btn" to="/Search" activeClass="active">Search</NavLink></button>
              <button className="button"><NavLink className="btn" to="/Favorites" activeClass="active">Favorites</NavLink></button>
            </div>
          </header>

          <Switch>
              <Route path="/Search" component={Home}  />
              <Route path="/Favorites" component={Favorites}/>
              <Redirect to={{
                pathname: "/Search",
                state: { from: 'NOT FOUND PAGE' },
              }} />
          </Switch>
          
        </div>
      </Provider>
    );
  }
}

export default App;
