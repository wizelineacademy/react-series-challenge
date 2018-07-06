import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    gifs: []
  }

  componentDidMount() {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Y354pcUIVTGZXofCIqvlYWA2Bv1khCCZ&limit=5`)
      .then(res => {
        //console.log(res.data);
        const gifs = res.data.data;
        this.setState({ gifs });
        console.log(this.state.gifs);
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">
          The Doctor recommends:
        </p>
        <ul>
        { this.state.gifs.map(gif => <li>{gif.url}</li> )}
        </ul>

      </div>
    );
  }
}

export default App;
