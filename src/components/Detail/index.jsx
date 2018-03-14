import React from "react";
import PropTypes from 'prop-types';
import {DetailWrapper} from "./Detail.style";
import GifCardContainer from "../../containers/GifCard";
import NotFound from "../NotFound";

const Detail = ({favorites, match, trending}) => {
  const obtainGifById = (id) => {
    let gif = favorites.find((favorite) => favorite.id === id);
    if (gif) {
      return {data: gif, isFavorite: true}
    }
    gif = trending.find((gif) => gif.id === id);
    return gif ? {data: gif, isFavorite: false} : null;
  };

  const gifCard = (gif) => {
    return (
      <GifCardContainer
        gif={gif.data}
        isFavorite={gif.isFavorite}
        isDetailBtnVisible={false}
        imageSize={'original'}
      />
    )
  };

  const gif = obtainGifById(match.params.id);

  return (
    <DetailWrapper>
      {
        gif ? gifCard(gif) : <NotFound />
      }
    </DetailWrapper>
  )
};

Detail.propTypes = {
  trending: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired
};

export default Detail;
