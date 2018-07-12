import React from 'react';
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

const ActionButton = styled.button`
  border: none;
  appearence: none;
  border-radius: 3px;
  padding: 6px;
  cursor: pointer;
  margin: 4px auto;
  display: block;
  background-color: ${props =>
    props.secondary && props.theme
      ? props.theme.secondary.background
      : props.theme.primary.background};
  color: ${props =>
    props.secondary && props.theme
      ? props.theme.secondary.foreground
      : props.theme.primary.foreground};
`;

const GifImg = styled.img`
  width: 145px;
`;

const GifItem = ({
  gif,
  addFavoriteId,
  removeFavoriteId,
  isFavorite,
  openModal,
}) => {
  const RESTRICTED_RATINGS = ['pg-13', 'r'];
  if (RESTRICTED_RATINGS.indexOf(gif.rating) > -1) {
    throw new Error('NSFW content');
  }

  const addFavBtn = (
    <ActionButton
      className="add-favorites-button"
      onClick={e => {
        addFavoriteId(gif.id);
      }}
    >
      + Agregar mis favoritos.
    </ActionButton>
  );

  const removeFavBtn = (
    <ActionButton
      className="remove-favorites-button"
      secondary
      onClick={e => {
        removeFavoriteId(gif.id);
      }}
    >
      Quitar de mis favoritos.
    </ActionButton>
  );

  return (
    <ItemWrapper itemscope itemtype="http://schema.org/Media">
      <GifImg
        itemProp="image"
        alt={gif.title}
        src={gif.images.preview_gif.url}
      />
      <p itemProp="name">{gif.title}</p>
      <p>
        URL: <a href={gif.bitly_url}>{gif.bitly_url}</a>
      </p>
      <p>
        by: <span itemProp="author">{gif.username}</span>
      </p>
      {isFavorite ? removeFavBtn : addFavBtn}
      <ActionButton onClick={() => openModal({ gif })}>Ampliar</ActionButton>
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

export default GifItem;

export { ActionButton };
