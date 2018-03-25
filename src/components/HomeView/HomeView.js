import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import trendingGifs from '../../actions/trendingGifs';
import {Container} from "../../App.styled";
import SearchBar from "../SearchBar/SearchBar";
import GifList from "../GifList/GifList";

class HomeView extends Component {
  constructor(props) {
    super();
    props.getTrendingGifsRequested();
  }
  render() {
    const {data} = this.props.trendingGifs;
    return (
      <Container>
        <SearchBar />
        <GifList gifs={data}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { trendingGifs } = state;

  return { trendingGifs };
};
const mapDispatchToProps = (dispatch) => {
  const { getTrendingGifsRequested } = trendingGifs.creators;

  return bindActionCreators({ getTrendingGifsRequested }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)