import React, { Fragment } from 'react';
import GifsList from '../GifsList';
import GifModal from '../../containers/GifModal';

const Favorites = ({ gifs }) => (
  <Fragment>
    <GifModal />
    <h1>Mis favoritos</h1>
    <GifsList gifs={gifs} />
  </Fragment>
);

export default Favorites;
