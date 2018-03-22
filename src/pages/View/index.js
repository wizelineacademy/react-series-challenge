import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Favorite from '../../components/Favorite';
import { Image, Message, Page } from '../../styledComponents';
import notFoundImage from '../../assets/images/notFound.gif';
import * as Actions from '../actionCreators/view';

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
            onToggleFavorite={() => { props.toggleFavorite(currentGif) }}
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
    props.getGifId(expectedId);
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

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(View);
