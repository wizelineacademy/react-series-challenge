import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import trendingGifs from '../../actions/trendingGifs';
import searchingGifs from '../../actions/searchingGifs';
import {Container} from "../../App.styled";
import SearchBar from "../SearchBar/SearchBar";
import GifList from "../GifList/GifList";

export class HomeView extends Component {
  constructor(props) {
    super();
    props.getTrendingGifsRequested();
  }
  componentDidMount() {
    this.props.searchGifsClear();
  }
  render() {
    const {trendingGifs, searchingGifs} = this.props;
    let data = null;
    if (searchingGifs.data.length > 0) {
      data = searchingGifs.data;
    } else {
      data = trendingGifs.data;
    }
    return (
      <Container>
        <SearchBar onSearch={this.props.searchGifsRequested}/>
        <GifList gifs={data}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { trendingGifs, searchingGifs } = state;
  return { trendingGifs, searchingGifs };
};
const mapDispatchToProps = (dispatch) => {
  const { getTrendingGifsRequested } = trendingGifs.creators;
  const { searchGifsRequested, searchGifsClear } = searchingGifs.creators;

  return bindActionCreators({
    getTrendingGifsRequested,
    searchGifsRequested,
    searchGifsClear
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)