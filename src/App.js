import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Link,
  NavLink,
  Switch,
  withRouter,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div >
            <button><NavLink to="/Search" activeClass="active">Search</NavLink></button>
            <button><NavLink to="/Favorites" activeClass="active">Favorites</NavLink></button>
          </div>
        </header>

        <Switch>
             <Route path="/Search" render={()=> 
                                        <p className="App-intro">
                                          Welcome to Search.
                                        </p>}  />
             <Route path="/Favorites" render={()=> 
                                        <p className="App-intro">
                                          Welcome to Favorites.
                                        </p>}  />
        </Switch>
        
      </div>
    );
  }
}

export default App;
