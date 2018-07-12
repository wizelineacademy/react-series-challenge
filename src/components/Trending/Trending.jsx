import React from 'react';
import PropTypes from 'prop-types';

import Template from '../Template';
import NavBar from '../NavBar';
import GifGrid from '../GifGrid';
import Gif from '../Gif';

class Trending extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchTrending, fetchFavorite } = this.props;
    fetchTrending();
    fetchFavorite();
  }

  handleChange(event) {
    const { searchTrending, fetchTrending } = this.props;
    const { value } = event.target;
    if (value !== '') {
      searchTrending({ payload: { text: value } });
    } else {
      fetchTrending();
    }
  }

  render() {
    const {
      trendingGifs,
      favoriteGifs,
      filterTrendingText,
    } = this.props;

    const links = [
      { text: 'Trending Gifs', url: '/trending', isActive: true },
      { text: 'Favorite Gifs', url: '/favorite', isActive: false },
    ];

    return (
      <Template>
        <NavBar links={links} placeholder="Search..." type="text" value={filterTrendingText} onChange={this.handleChange} />
        <div>
          <GifGrid
            gifs={trendingGifs}
            favoriteGifs={favoriteGifs}
            filterText={filterTrendingText}
          />
        </div>
      </Template>
    );
  }
}

Trending.propTypes = {
  filterTrendingText: PropTypes.string.isRequired,
  fetchTrending: PropTypes.func.isRequired,
  searchTrending: PropTypes.func.isRequired,
  ...Gif.propTypes,
};

export default Trending;
