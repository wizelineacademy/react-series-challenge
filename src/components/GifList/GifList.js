import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {Gif} from "../Gif/Gif";
import {MasonryContainer} from "./GifList.styled";
import trendingGifs from '../../actions/trendingGifs';

class GifList extends Component {
  constructor(props) {
    super(props);
    props.getTrendingGifsRequested();
  }
  render() {
    const {data} = this.props.trendingGifs;
    return (
      <MasonryContainer>
        { data.map(gif => <Gif key={gif.id} gif={gif} />) }
      </MasonryContainer>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    trendingGifs,
  } = state;

  return {
    trendingGifs,
  };
};
const mapDispatchToProps = (dispatch) => {
  const { getTrendingGifsRequested } = trendingGifs.creators;

  return bindActionCreators({
    getTrendingGifsRequested,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GifList)