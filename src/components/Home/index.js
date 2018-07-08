import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GifsList from '../GifsList';
import GifModal from '../../containers/GifModal';
import styled from 'styled-components';

const ItemsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

class Home extends Component {
  state = {
    searchTerm: '',
  };

  onTermChange = e => {
    const val = e.target.value;
    this.setState(prevState => ({ ...prevState, searchTerm: val }));
  };

  onSearchSubmit = e => {
    e.preventDefault();
    this.props.searchGifs(this.state.searchTerm);
  };

  render() {
    const { gifs, isLoading } = this.props;
    return !isLoading ? (
      <div>
        <GifModal />
        <h1>Trending GIFS</h1>
        <form onSubmit={this.onSearchSubmit}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.onTermChange}
          />
          <button>Buscar</button>
        </form>
        <GifsList gifs={gifs} loading={isLoading} />
      </div>
    ) : (
      <p>Cargando..</p>
    );
  }
}

Home.propTypes = {
  searchGifs: PropTypes.func.isRequired,
  gifs: PropTypes.array.isRequired,
  isLoading: PropTypes.isLoading,
};

export default Home;
