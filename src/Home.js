import React, { Component } from 'react';
import GifList from './GifList';
import mockData from './mockData';
import NavBar from './NavBar';


class Home extends Component {
  render() {
    return (
      <div>
        <GifList gifs={mockData.data} />
      </div>
    );
  }
}

export default Home;