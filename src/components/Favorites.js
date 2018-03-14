import React, { Component } from 'react';
import ItemList from './ItemList';
import Search from './Search';

class Favorites extends Component {
  render() {
    return (
      <div>
        <Search />
        <ItemList />
      </div>
    )
  }
}

export default Favorites;
