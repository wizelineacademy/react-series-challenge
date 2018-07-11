import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import FavElements from './components/FavElements';
import ElementsView from './components/ElementsView';
import {Route, Link, Redirect, Switch} from "react-router-dom";
import {StyledLink} from './App.styled';
export const FAV_GIFS_VIEW = '/favElements';
export const ALL_GIFS_VIEW = '/allElements';

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
                      <StyledLink to={ALL_GIFS_VIEW}>Gifs</StyledLink>
                  </li>
                  <li>
                      <Link to={FAV_GIFS_VIEW}>Fav GIFS</Link>
                  </li>
              </ul>

              <hr />
              <h2>Click on image to add or delete</h2>

              <Switch>
                  <Route exact path={ALL_GIFS_VIEW} component={ElementsView} />
                  <Route exact path={FAV_GIFS_VIEW} component={FavElements} />
                  <Redirect from="/" to={ALL_GIFS_VIEW}/>
              </Switch>
          </div>


          
      </div>
    );
  }
}

export default App;
