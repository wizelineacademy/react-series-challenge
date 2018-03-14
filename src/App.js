import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Trending from './pages/Trending'
import Favorites from './pages/Favorites'
import Details from './pages/Details'
import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Trending}/>
          <Route path="/favs" component={Favorites} />
          <Route path="/details/:id" component={Details} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
