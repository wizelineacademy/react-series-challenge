import React, { Fragment } from 'react';
import GifsList from '../GifsList';

const Favorites = ({ gifs }) => (
  <Fragment>
    <h1>Mis favoritos</h1>
    <GifsList gifs={gifs} />
  </Fragment>
);

export default Favorites;
