import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import SearchBar from './components/SearchBar';
import FavElements from './components/FavElements';
import ElementsView from './components/ElementsView';
import {Route, Link, Redirect} from "react-router-dom";

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
                      <Link to="/">Gifs</Link>
                  </li>
                  <li>
                      <Link to="/FavElements">Fav GIFS</Link>
                  </li>
              </ul>

              <hr />
              <h2>Click on image to add or delete</h2>


              <Route exact path="/" component={ElementsView} />
              <Route path="/FavElements" component={FavElements} />
          </div>


          
      </div>
    );
  }
}

export default App;
