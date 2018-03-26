import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GifPreview } from "./FavoriteList.styled"
import search from '../../actions/search';
import SVG from "../SVG";
import GifThumb from "../GifThumb";

class FavoriteList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount()
  {
    
  }

  render() {
    var self = this;
    console.log(this.props.favorites.gifs);
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

const mapDispatchToProps = (dispatch) => {
  const { getTrendingRequested } = search.creators;

  return bindActionCreators({
    getTrendingRequested
  }, dispatch);
}

export default connect(mapStateToProps, null)(FavoriteList);
