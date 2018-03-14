import React from 'react';
import { connect } from 'react-redux';
import Favorite from '../../components/Favorite';
import { Image, Message, Page } from '../../styledComponents';
import notFoundImage from '../../assets/images/notFound.gif';
import {
  getGifId,
} from '../data/view/actions';
import {
  toggleFavorite,
} from '../data/favorites/actions';

const View = (props) => {
  const {
    currentGif,
    searched,
  } = props.view;

  const {
    list,
  } = props.favorites;

  const expectedId = props.match.params.gif;
  let gifContent = null;
  if(searched) {
    const src = currentGif.id ? currentGif.images.original.url : notFoundImage;
    let message = '';
    if (currentGif.user) {
      message = currentGif.id ? currentGif.user.display_name : 'Not Found';
    } else {
      message = 'GIF';
    }

    const isStarred = Object.keys(list).some(key => currentGif.id === key);

    gifContent = (
      <div>
        <Message>
          <p>{message}</p>
          <Favorite
            starred={isStarred}
            onToggleFavorite={() => { props.handleToggleFav(currentGif) }}
          />
        </Message>
        <Image
          alt="gif"
          size="50%"
          src={src}
        />
      </div>
    );
  } else {
    props.handleGetGif(expectedId);
  }

  return (
    <Page>
      {gifContent}
    </Page>
  );
};

const mapStateToProps = state => {
  const {
    view,
    favorites,
  } = state.pages;

  return {
    view,
    favorites,
  };
};

const mapDispatchToProps = dispatch => ({
  handleGetGif: id => dispatch(getGifId(id)),
  handleToggleFav: (element) => dispatch(toggleFavorite(element)),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
