import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import FavElements from './components/FavElements';
import ElementsView from './components/ElementsView';
import {Route, Link, Redirect, Switch} from "react-router-dom";
import {StyledLink} from './App.styled';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
          <div>
              <ul>
                  <li>
                      <StyledLink to="/">Gifs</StyledLink>
                  </li>
                  <li>
                      <Link to="/FavElements">Fav GIFS</Link>
                  </li>
              </ul>

              <hr />
              <h2>Click on image to add or delete</h2>

              <Switch>
                  <Route exact path="/" component={ElementsView} />
                  <Route path="/FavElements" component={FavElements} />
              </Switch>
          </div>


          
      </div>
    );
  }
}

export default App;
