import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Template from '../Template';
import GifGrid from '../GifGrid';
import Gif from '../Gif';

class Trending extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchTrending } = this.props;
    fetchTrending();
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

    return (
      <Template>
        <input name="search-box" type="text" value={filterTrendingText} onChange={this.handleChange} />
        <Link to="/favorite" href="/favorite">Go to Favorite</Link>
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
