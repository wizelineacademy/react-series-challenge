import React, { Component } from 'react';
import { GifDetailContainer } from './GifDetail.styled';
import {
  GiphyListItemHeader,
  GiphyListItemBody,
  GiphyListItemFooter,
  GiphyLinkFavorite,
  GiphyHeartFavorite} from '../../presentational/GiphyList';
import { connect } from 'react-redux';
import trendingGifsActions from '../../../actions/trendingGifs';
import favoriteGifsActions from '../../../actions/favoriteGifs';
const { creators } = trendingGifsActions;
const { getGifRequested } = creators;
const { creators: creatorsFav } = favoriteGifsActions;
const { addFavoriteGifRequested, removeFavoriteGifRequested } = creatorsFav;

class GifDetail extends Component {
  componentDidMount () {
    const { getGifRequested } = this.props;
    getGifRequested(this.props.gifID);
  }

  render() {
    const {selectedGif: source, addFavoriteGifRequested, removeFavoriteGifRequested} = this.props;

    if (!source.fetching) {
      /*eslint no-script-url:0*/
      return (
        <GifDetailContainer>
          <GiphyListItemHeader>
            <h3>{source.title}</h3>
          </GiphyListItemHeader>
          <GiphyListItemBody>
            <img src={source.images.original.url} alt={source.title} />
          </GiphyListItemBody>
          <GiphyListItemFooter>
            <GiphyLinkFavorite href='javascript:void(0)' onClick={() => {
              if (source.isFavorite) {
                removeFavoriteGifRequested(source.id);
              } else {
                addFavoriteGifRequested(source);
              }
            }}>
            {source.isFavorite === true
              ? <span>Remove from my favorites</span> 
              : <span>Send to my favorites</span>}
            <GiphyHeartFavorite color={source.isFavorite ? 'tomato' : 'lightgray'} />
            </GiphyLinkFavorite>
          </GiphyListItemFooter>
        </GifDetailContainer>
      );
    } else {
      return (
        <GifDetailContainer>
          Loading ...
        </GifDetailContainer>
      );
    }
  }
}

const mapStateToProps = (state) => {
  const {selectedGif} = state.trendingGifs;

  return {
    selectedGif
  };
};

export default 
  connect(
    mapStateToProps,
    {
      getGifRequested,
      addFavoriteGifRequested,
      removeFavoriteGifRequested
    }
  )(GifDetail);
