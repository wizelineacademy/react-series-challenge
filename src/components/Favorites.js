import React, { Component } from 'react';
import store from '../store';

class Favorites extends Component {
  constructor() {
    super();
  
    this.state = {
      favorites: []
    }
  
    store.subscribe(() => {
      this.setState({
        favorites: store.getState().favorites
      });
    });

  }

  render() {
    return (
      <div className="">
        <p>My Favorites</p>

        <div className="container">
            { this.state.favorites.map(
              gif => <div className="element" key={gif.id}>
                      <img src={gif.images.downsized_medium.url} className="thegif" alt={gif.title}/>
                      <p onClick={() => this.addFavorite(gif)}>Like</p>
                    </div>
            )}
          </div>
      </div>
    )
  }
}

export default Favorites;