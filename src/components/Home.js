import React, { Component } from 'react';
import ItemList from './ItemList';
import Search from './Search';

class Home extends Component {
  render() {
    return (
      <div>
        <Search />
        <ItemList />
      </div>
    )
  }
}

export default Home;
