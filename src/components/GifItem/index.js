import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ItemWrapper = styled.div`
  background-color: #fff;
  border-radius: 3px;
  padding: 8px;
  border-color: #000;
  border-width: 4px;
  border-color: #000;
  box-shadow: 1px 1px 1px #000;
  margin: 4px 10px;
  flex: 0.33;
`;

const GifImg = styled.img`
  width: 145px;
`;

class GifErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasErrors: false, errorInfo: '' };
  }
  componentDidCatch(error, info) {
    console.log('error in boundary', error);
    console.log('info in boundary', info);

    this.setState({ hasErrors: true, errorInfo: info });
  }
  render() {
    const { children } = this.props;
    const { hasErrors } = this.state;
    console.log('this.state errorboundary', this.state);
    if (hasErrors) {
      return <div>GIF no disponible</div>;
    }

    return children;
  }
}

const GifItem = ({
  gif,
  addFavoriteId,
  removeFavoriteId,
  isFavorite,
  openModal,
}) => {
  const RESTRICTED_RATINGS = ['pg-13', 'r'];
  if (RESTRICTED_RATINGS.indexOf(gif.rating) > -1) {
    //throw new Error('NSFW content');
  }

  const addFavBtn = (
    <button
      onClick={e => {
        e.preventDefault();
        addFavoriteId(gif.id);
      }}
    >
      Agregar mis favoritos.
    </button>
  );

  const removeFavBtn = (
    <button
      onClick={e => {
        e.preventDefault();
        removeFavoriteId(gif.id);
      }}
    >
      Quitar de mis favoritos.
    </button>
  );

  return (
    <ItemWrapper>
      <GifImg alt={gif.slug} src={gif.images.preview_gif.url} />
      <p>{gif.title}</p>
      <p>
        URL: <a href={gif.bitly_url}>{gif.bitly_url}</a>
      </p>
      <p>by: {gif.username}</p>
      {isFavorite ? removeFavBtn : addFavBtn}
      <button onClick={() => openModal({ gif })}>Ver más</button>
    </ItemWrapper>
  );
};

GifItem.propTypes = {
  id: PropTypes.string.isRequired,
  gif: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    bitly_url: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,

    images: PropTypes.shape({
      preview_gif: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }),
  isFavorite: PropTypes.bool.isRequired,
  addFavoriteId: PropTypes.func.isRequired,
  removeFavoriteId: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

const GifItemWrapper = props => (
  <GifErrorBoundary>
    <GifItem {...props} />
  </GifErrorBoundary>
);

export default GifItemWrapper;
