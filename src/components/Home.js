import React, { Component, Fragment } from 'react';
import GifList from './GifList';
import { connect } from 'react-redux';
import { fetchTrendingGifs } from '../actions/giphyApi'
import { toggleFavoriteGif } from '../actions/favorites';
import NavBar from './NavBar';
import InfiniteScroll from './InfiniteScroll';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      page: 0,
    }
  }

  componentDidCatch() {
    this.setState({ error: 'Error' });
  }

  componentDidMount() {
    this.props.fetchTrendingGifs();
  }

  handleGifLikeClick = (gif) => {
    this.props.toggleFavoriteGif(gif);
  }

  render() {
    if (this.state.error) {
      return (<h1> Error. Please refresh page </h1>);
    }
    const { gifs } = this.props;
    return (
      <Fragment>
        <NavBar onSearch={this.handleSearch} />
        <div>
          <GifList
            onLikeClick={this.handleGifLikeClick}
            gifs={gifs}
          />
          <InfiniteScroll onLoadMoreData={this.handleLoadMoreData} />
        </div>
      </Fragment>
    );
  }

  handleSearch = (search) => {
    this.setState({ search, page: 0 }, () => {
      this.props.fetchTrendingGifs(search);
    });
  }

  handleLoadMoreData = () => {
    this.setState((prevState, props) => {
      return { page: (prevState.page + 1) }
    }, () => {
      this.props.fetchTrendingGifs(this.state.search, this.state.page);
    })
  }
}

const mapStateToProps = (state = {}) => {
  const { giphyApi } = state;
  const { gifs } = giphyApi;
  return { gifs };
}

const mapDispatchToProps = {
  fetchTrendingGifs,
  toggleFavoriteGif,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);