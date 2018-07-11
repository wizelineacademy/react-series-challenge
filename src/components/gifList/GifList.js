import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import favoriteActions from 'actions/favorite';
import Gif from 'components/gif';
import { StyledGifList } from './GifList.style'

const GifList = (props) => {
  let toggleFavorite = (gif) => {
    let gifData = (props.favorite[gif]) || props.gifs[gif]
    if(gifData.liked) {
      props.removeFavorite({ gif: gifData });
    } else {
      props.addFavorite({ gif: gifData });
    }
  }

  return (
    <StyledGifList>
      {
        Object.keys(props.gifs).map((gif) =>
          <Gif
            key={props.gifs[gif].id}
            id={props.gifs[gif].id}
            liked={props.gifs[gif].liked}
            title={props.gifs[gif].title}
            src={props.gifs[gif].images.fixed_width_small.url}
            onClick={() => toggleFavorite(gif)}
          />
        )
      }
    </StyledGifList>
  )
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
