import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container} from "../../App.styled";
import SearchBar from "../SearchBar/SearchBar";
import GifList from "../GifList/GifList";

class FavoritesView extends Component {

  render() {
    const {allGifs} = this.props.favoritesGifs;
    const data = Object.keys(allGifs).map(key => allGifs[key]);
    return (
      <Container>
        <SearchBar />
        <GifList gifs={data}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { favoritesGifs } = state;
  return { favoritesGifs };
};


export default connect(mapStateToProps)(FavoritesView)