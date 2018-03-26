import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {Container} from "../../App.styled";
import SearchBar from "../SearchBar/SearchBar";
import GifList from "../GifList/GifList";
import favoritesGif from '../../actions/favoritesGifs';

class FavoritesView extends Component {

  render() {
    const {allGifs, filtered} = this.props.favoritesGifs;
    let data = null;
    if (Object.keys(filtered).length > 0) {
      data = Object.keys(filtered).map(key => filtered[key]);
    } else {
      data = Object.keys(allGifs).map(key => allGifs[key]);
    }
    return (
      <Container>
        <SearchBar onSearch={this.props.filterGifs}/>
        <GifList gifs={data}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { favoritesGifs } = state;
  return { favoritesGifs };
};

const mapDispatchToProps = (dispatch) => {
  const { filterGifs } = favoritesGif.creators;

  return bindActionCreators({
    filterGifs,
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(FavoritesView)