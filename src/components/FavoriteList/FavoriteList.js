import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GifPreview } from "./FavoriteList.styled"
import search from '../../actions/search';
import SVG from "../SVG";
import GifThumb from "../GifThumb";

export class FavoriteListComponent extends React.Component {
  render() {
    var self = this;
    var favoriteItems = Object.keys(this.props.favorites.gifs).map(function(property){
      var item = self.props.favorites.gifs[property];
      return (<GifThumb key={item.id} id={item.id} image={item.image}/>);
    });
    return (
      <div>
          <h1>Favorites</h1>
          <div>{favoriteItems}</div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  };
};


export default connect(mapStateToProps, null)(FavoriteListComponent);
