import React from 'react';
import { connect } from 'react-redux';
import { Image, Message, Page } from '../../styledComponents';
import notFoundImage from '../../assets/images/notFound.gif';
import {
  getGifId,
} from '../data/view/actions';

const View = (props) => {
  const {
    currentGif,
    searched,
  } = props.view;

  const expectedId = props.match.params.gif;
  let gifContent = null;
  if(searched) {
    const src = currentGif.id ? currentGif.images.original.url : notFoundImage;
    const message = currentGif.id ? currentGif.user.display_name : 'Not Found';
    gifContent = (
      <div>
        <Message>
          <p>{message}</p>
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
  } = state.pages;

  return {
    view,
  };
};

const mapDispatchToProps = dispatch => ({
  handleGetGif: id => dispatch(getGifId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
