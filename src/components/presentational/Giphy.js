import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FavSection from './FavSection';
import { toggleFavoriteGiphy } from '../../actions';

class Giphy extends Component {
  componentWillMount() {
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleFavorite() {
    this.props.toggleFavoriteGiphy(this.props.giphy.id);
  }

  onFavs() {
    const { giphy, favorites } = this.props;

    if(favorites.indexOf(giphy.id) !== -1) {
      return true;
    }

    return false;
  }

  render() {
    const { giphy } = this.props;
    const size = this.props.size || 'fixed_width';
    const image = giphy.images[size];

    return (
      <div>
        <Link to={`/giphy/${giphy.id}`} >
          <img
            src={image.url}
            alt={giphy.title}
          />
        </Link>
        <FavSection inFavs={this.onFavs()} clickHandler={this.toggleFavorite} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.list
  }
};

export default connect(mapStateToProps, { toggleFavoriteGiphy })(Giphy);