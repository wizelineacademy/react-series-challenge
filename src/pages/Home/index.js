import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import GifList from '../../components/GifList';
import { Message, Page } from '../../styledComponents';
import { fetchTrendingGifs } from '../data/home/actions';

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
            <GifList elements={gifs.data}/>
          }
        </div>
      </Page>
    );
  }
}

const mapStateToProps = state => {
  const {
    home
  } = state.pages;

  return {
    home,
  };
};

const mapDispatchToProps = dispatch => ({
  getTrending: () => dispatch(fetchTrendingGifs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
