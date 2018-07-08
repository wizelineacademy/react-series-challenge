import React, { Component } from 'react';
//import logo from '../logo.svg';
import axios from 'axios';
//import './App.css';
//require('./.env');

//const url = 'http://api.giphy.com/v1/gifs/search?q=game+of+thrones&api_key='+process.env.REACT_APP_GIPHY_API_KEY+'&limit=5';
//const URL = 'http://api.giphy.com/v1/gifs/search?q=silicon+valley+hbo&api_key=Y354pcUIVTGZXofCIqvlYWA2Bv1khCCZ&limit=10';
const URL = 'https://api.giphy.com/v1/gifs/trending?api_key=Y354pcUIVTGZXofCIqvlYWA2Bv1khCCZ&limit=10';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Trending:
        </p>
        <div className="container">
          { this.state.gifs.map(gif => <div className="element"><img src={gif.images.downsized_medium.url} className="thegif" alt="gif.title"/></div> )}
        </div>

      </div>
    );
  }
}

export default App;
