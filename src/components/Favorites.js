import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifList from './GifList';

class Favorites extends Component {
  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        <GifList gifs={this.props.favorite} />
      </div>
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

export default connect(mapStateToProps)(Favorites);
