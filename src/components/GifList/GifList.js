import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {Gif} from "../Gif/Gif";
import {MasonryContainer} from "./GifList.styled";
import favoritesGifs from "../../actions/favoritesGifs";


const isFavorited = (favorites, gifId) => {
  return favorites[gifId] !== undefined;
}

const GifList = ({ gifs, addGif, removeGif, favoritesGifs }) => {
  return (
    <MasonryContainer>
      { gifs.map(gif =>
        <Gif
          addGif={addGif}
          removeGif={removeGif}
          key={gif.id}
          gif={gif}
          isFavorited={isFavorited(favoritesGifs.allGifs, gif.id)}
        />
      )}
    </MasonryContainer>
  )
};
const mapStateToProps = (state) => {
  const { favoritesGifs } = state;
  return { favoritesGifs };
};
const mapDispatchToProps = (dispatch) => {
  const { addGif, removeGif } = favoritesGifs.creators;

  return bindActionCreators({
    addGif,
    removeGif
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(GifList);

