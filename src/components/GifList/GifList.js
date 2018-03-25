import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {Gif} from "../Gif/Gif";
import {MasonryContainer} from "./GifList.styled";
import favoritesGifs from "../../actions/favoritesGifs";

const GifList = ({ gifs, addGif }) => {
  return (
    <MasonryContainer>
      { gifs.map(gif => <Gif addGif={addGif} key={gif.id} gif={gif} />) }
    </MasonryContainer>
  )
};
const mapDispatchToProps = (dispatch) => {
  const { addGif } = favoritesGifs.creators;

  return bindActionCreators({
    addGif,
  }, dispatch);
};
export default connect(null, mapDispatchToProps)(GifList);

