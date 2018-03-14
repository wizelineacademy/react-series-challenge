import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GifList from '../../components/GifList';
import { Message, Page } from '../../styledComponents';
import {
  fetchTrendingGifs,
} from '../data/home/actions';
import {
  toggleFavorite,
} from '../data/favorites/actions';
import {
  setCurrentGif,
} from '../data/view/actions';

class Home extends Component {
  componentWillMount(){
    this.props.getTrending();
  }

  render(){
    const {
      gifs,
      searching,
      error,
    } = this.props.home;

    const {
      list,
    } = this.props.favorites;

    return (
      <Page>
        <Message>
          Hello!
          <p>
            These are the most popular GIFs!
          </p>
          <p>
            Visit your Favorites&ensp;
            <Link
              to="/favorites"
            >
              here!
            </Link>
          </p>
        </Message>
        <div>
          {
            searching &&
            <p> Searching ... </p>
          }
          {
            error &&
            <p> There was an error </p>
          }
          { (!error && !searching && gifs) &&
            <GifList
              elements={gifs.data}
              starred={list}
              handleSetGif={this.props.handleSetGif}
              handleToggleFav={this.props.handleToggleFav}
            />
          }
        </div>
      </Page>
    );
  }
}

const mapStateToProps = state => {
  const {
    home,
    favorites,
  } = state.pages;

  return {
    home,
    favorites,
  };
};

const mapDispatchToProps = dispatch => ({
  getTrending: () => dispatch(fetchTrendingGifs()),
  handleToggleFav: (element) => dispatch(toggleFavorite(element)),
  handleSetGif: (element) => dispatch(setCurrentGif(element)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
