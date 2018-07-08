import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GifList from './GifList'
import gifsActions from '../actions/gifs';

class Home extends Component {
  componentWillMount = () => {
    this.props.getTrendingGifs();
  }
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <GifList gifs={this.props.trendingGifs} />
      </div>
    )  
  }
}



const mapStateToProps = (state) => {
  const {
    trendingGifs
  } = state;
  
  return {
    trendingGifs
  };
};

const mapDispatchToProps = (dispatch) => {
  const { getTrendingGifs } = gifsActions.creators;
  
  return bindActionCreators({
    getTrendingGifs,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
