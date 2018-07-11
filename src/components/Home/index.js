import React from 'react';
import PropTypes from 'prop-types';
import GifsList from '../GifsList';
import GifModal from '../../containers/GifModal';
import { Header, HeaderTitle } from '../Header';
import SearchBar from '../SearchBar';

const Home = ({ gifs, isLoading, searchGifs }) => {
  return !isLoading ? (
    <div>
      <GifModal />
      <Header>
        <HeaderTitle>Trending GIFS</HeaderTitle>
      </Header>
      <SearchBar onSearch={searchGifs} />
      <GifsList gifs={gifs} loading={isLoading} />
    </div>
  ) : (
    <p>Cargando..</p>
  );
};

Home.propTypes = {
  searchGifs: PropTypes.func.isRequired,
  gifs: PropTypes.array.isRequired,
  isLoading: PropTypes.isLoading,
};

export default Home;
