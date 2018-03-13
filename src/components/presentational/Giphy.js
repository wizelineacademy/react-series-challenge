import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FavSection from './FavSection';

class Giphy extends Component {
  render() {
    const { giphy } = this.props;
    return (
      <div>
        <Link to={`/giphy/${giphy.slug}`} >
          <img
            src={giphy.images.fixed_width.url}
            alt={giphy.title}
          />
        </Link>
        <FavSection inFavs />
      </div>
    );
  }
}

export default Giphy;