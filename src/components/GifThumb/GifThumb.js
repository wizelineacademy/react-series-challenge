import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GifPreview, Heart } from "./GifThumb.styled";
import favorites from '../../actions/favorites';
import SVG from "../SVG";

class GifThumb extends React.Component {
  constructor(props) {
    super(props);
    this.addFavorite = this.addFavorite.bind(this);
    this.loadDetails = this.loadDetails.bind(this);
  }
  loadDetails() {
    
  }
  addFavorite() {
    this.props.toggleFavorite({id:this.props.id, image: this.props.image});
  }
  render() {
    var isFavorite = this.props.favorites.gifs[this.props.id];
    return (<GifPreview onClick={this.loadDetails()}>
      <img src={this.props.image}/>
      <Heart onClick={this.addFavorite}>{isFavorite ? SVG.HeartFill : SVG.HeartEmpty}</Heart>
    </GifPreview>);
  }
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  };
};

const mapDispatchToProps = (dispatch) => {
  const { toggleFavorite } = favorites.creators;

  return bindActionCreators({
    toggleFavorite
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GifThumb);
