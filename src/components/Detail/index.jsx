import React from "react";
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {DetailWrapper, NavigationBtn, Title} from "./Detail.style";
import GifCardContainer from "../../containers/GifCard";
import NotFound from "../NotFound";
import homeIcon from './assets/home.png';
import favoriteIcon from './assets/heart-filled-white.png';

export const Detail = ({favorites, history, match, trending}) => {
  const obtainGifById = (id) => {
    let gif = favorites.original.find((favorite) => favorite.id === id);
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
      <div style={{}}>
        <Title>Detail</Title>
        <NavigationBtn src={homeIcon} onClick={() => history.push('/')} />
        <NavigationBtn src={favoriteIcon} onClick={() => history.push('/favorites')} />
      </div>
      <div style={{display: 'inline-flex', marginTop: '15px'}}>
        {
          gif ? gifCard(gif) : <NotFound />
        }
      </div>
    </DetailWrapper>
  )
};

Detail.propTypes = {
  trending: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired
};

export default withRouter(Detail);
