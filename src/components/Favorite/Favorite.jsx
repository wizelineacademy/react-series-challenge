import React from 'react';

import Template from '../Template';
import GifGrid from '../GifGrid';
import NavBar from '../NavBar';

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
    const links = [
      { text: 'Trending Gifs', url: '/trending', isActive: false },
      { text: 'Favorite Gifs', url: '/favorite', isActive: true },
    ];
    return (
      <Template>
        <NavBar links={links} placeholder="Filter..." type="text" value={filterText} onChange={this.handleChange} />
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
