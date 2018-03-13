import React, { Component } from 'react';
import styled from 'styled-components';

const Favorite = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

class FavSection extends Component {
  addToFavorites() {
    alert("Added to favorites");
  }

  render() {
    if (!this.props.inFavs) {
      return (
        <Favorite>
          <img src='/favOff.png' height="15" alt="Add to favorites" />
          <span>Add to favorites</span>
        </Favorite>
      );
    }

    return (
      <Favorite onClick={this.addToFavorites} >
        <img src='/favOn.png' height="15" alt="Remove from favorites" />  Remove from favorites
      </Favorite>
    );
  }
}

  export default FavSection;