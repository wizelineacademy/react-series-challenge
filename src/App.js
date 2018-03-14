import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Favorites from './Favorites'
import Details from './Details'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Route exact path="/" component={Home}/>
          <Route path="/favs" component={Favorites} />
          <Route path="/details/:id" component={Details}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
