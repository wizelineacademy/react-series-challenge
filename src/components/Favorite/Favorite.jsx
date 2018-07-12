import React from 'react';
import { Link } from 'react-router-dom';

import Template from '../Template';
import GifGrid from '../GifGrid';

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchFavorite } = this.props;
    fetchFavorite();
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => ({ filterText: value }));
  }

  render() {
    const { favoriteGifs } = this.props;
    const { filterText } = this.state;
    return (
      <Template>
        <input name="search-box" type="text" value={filterText} onChange={this.handleChange} />
        <Link to="/trending" href="/trending">Go to Trending</Link>
        <div>
          <GifGrid gifs={favoriteGifs} favoriteGifs={favoriteGifs} filterText={filterText} />
        </div>
      </Template>
    );
  }
}

Favorite.propTypes = {
  ...GifGrid.propTypes,
};

export default Favorite;
