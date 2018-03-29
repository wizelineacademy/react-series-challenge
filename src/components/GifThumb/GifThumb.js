import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GifPreview, Heart } from "./GifThumb.styled";
import favorites from '../../actions/favorites';
import SVG from "../SVG";
import { Link} from 'react-router-dom';

export class GifThumbComponent extends React.Component {
  constructor(props) {
    super(props);
    this.addFavorite = this.addFavorite.bind(this);
  }
  addFavorite() {
    this.props.toggleFavorite({id:this.props.id, image: this.props.image, title:this.props.title});
  }
  render() {
    var isFavorite = this.props.favorites.gifs[this.props.id];
    return (<GifPreview>
      <Link to={'/gif/' + this.props.id}>
        <img src={this.props.image} alt={this.props.title}/>
      </Link>
      <span>{this.props.title}</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(GifThumbComponent);
