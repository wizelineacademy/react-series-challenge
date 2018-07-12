import React, { Fragment } from 'react';
import SearchBar from '../SearchBar';

import { Header, HeaderTitle } from '../Header';
import GifsList from '../GifsList';
import GifModal from '../../containers/GifModal';

const Favorites = ({ searchFavorites, gifs }) => (
  <Fragment>
    <GifModal />
    <Header>
      <HeaderTitle>Mis favoritos</HeaderTitle>
    </Header>
    <SearchBar onSearch={searchFavorites} />

    <GifsList gifs={gifs} />
  </Fragment>
);

export default Favorites;
