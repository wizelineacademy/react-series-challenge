import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GifList from './GifList';
import trendingActions from '../actions/trending';

class Home extends Component {
  componentWillMount = () => {
    this.props.getTrendingGifs();
  }
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <GifList gifs={this.props.trending} />
      </div>
    )  
  }
}



const mapStateToProps = (state) => {
  const {
    trending
  } = state;
  
  return {
    trending
  };
};

const mapDispatchToProps = (dispatch) => {
  const { getTrendingGifs } = trendingActions.creators;
  
  return bindActionCreators({
    getTrendingGifs,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
