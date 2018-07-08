import React, { Component, Fragment } from 'react';
import GifsList from '../GifsList';
import GifModal from '../../containers/GifModal';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onSearchTermChange = this.onSearchTermChange.bind(this);
  }

  onSearchSubmit(e) {
    e.preventDefault();
    this.props.searchFavorites(this.state.searchTerm);
  }

  onSearchTermChange(e) {
    const val = e.target.value;
    this.setState(prevState => ({ searchTerm: val }));
  }

  render() {
    return (
      <Fragment>
        <GifModal />
        <form onSubmit={this.onSearchSubmit}>
          <input
            type="text"
            value={this.searchTerm}
            onChange={this.onSearchTermChange}
          />
          <button type="submit">Buscar en mis favoritos</button>
        </form>
        <h1>Mis favoritos</h1>
        <GifsList gifs={this.props.gifs} />
      </Fragment>
    );
  }
}

export default Favorites;
