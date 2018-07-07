import React, { Component } from 'react';
import GifList from './GifList';
import mockData from './mockData';


class Home extends Component {
  render() {
    return (
      <div>
        <GifList gifs={mockData} />
      </div>
    );
  }
}

export default Home;