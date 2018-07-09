import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import favoriteActions from '../actions/favorite';
import Gif from './Gif';

class GifList extends Component {
  toggleFavorite = (gif) => {
    let gifData = (this.props.favorite[gif]) || this.props.gifs[gif]
    if(gifData.liked) {
      this.props.removeFavorite({ gif: gifData });
    } else {
      this.props.addFavorite({ gif: gifData });
    }
  }

  render(){
    return (
      <React.Fragment>
        {
          Object.keys(this.props.gifs).map((gif) =>
            <Gif
              key={this.props.gifs[gif].id}
              id={this.props.gifs[gif].id}
              liked={this.props.gifs[gif].liked}
              src={this.props.gifs[gif].images.fixed_width_small.url}
              onClick={() => this.toggleFavorite(gif)}
            />
          )
        }
      </React.Fragment>
    )
  }
}



const mapStateToProps = (state) => {
  const {
    favorite
  } = state;
  
  return {
    favorite
  };
};

const mapDispatchToProps = (dispatch) => {
  const { removeFavorite, addFavorite } = favoriteActions.creators;

  return bindActionCreators({
    removeFavorite,
    addFavorite
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GifList);
