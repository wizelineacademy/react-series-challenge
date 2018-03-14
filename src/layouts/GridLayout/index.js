import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GiphyGrid } from '../../components/Giphy';
import { bindActionCreators } from 'redux';
import searchActions from '../../actions/search';
import trendingActions from '../../actions/trending';
import favActions from '../../actions/favorites';
import SearchComponentInput from '../../components/SearchComponent';
import {
  Container
} from './GridLayout.styled';

export class SearchLayout extends Component {
  static defaultProps = {
  };
  static propTypes = {
    children: PropTypes.node,
  };

  componentDidMount() {
    const {
      params
    } = this.props.match
    this.props.loadFavorites();
    switch (params.view){
      case 'trending': {
        this.props.trendingRequest();
        break;
      }
      case 'search': {
        if (params.searchTerm){
          this.props.searchRequest(params.searchTerm);
        }
        break;
      }
      default :{
        this.props.trendingRequest();
        break;
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    const {
      match
    } = this.props
    if ( nextProps.match.url !==  match.url ) {
      switch( nextProps.match.params.view ) {
        case 'search':{
          if (nextProps.match.params.searchTerm 
            !== match.params.searchTerm ) {
            this.props.searchRequest(nextProps.match.params.searchTerm);
          }
          break;
        }
        default: {
          this.props.trendingRequest();
          break;
        }
      }
    }
  }

  getGridData = () =>{
    const {
      match,
      trending,
      search,
      favorites
    } = this.props;
    switch(match.params.view){
      case 'trending' :{
        return trending.giphyArray
      }
      case 'search':{
        return search.giphyArray
      }
      case 'favorite':{
        return favorites.favorites;
      }
      default:
        return trending.giphyArray;
    }
  }
  handleFavClick = data =>{
    this.props.toggleFavoritesReq(data)
  }
  render () {
    const {
      match
    } = this.props;
    let gridData = this.getGridData()
    return (
      <Container>
        <SearchComponentInput match={ match }/>
        <div >
          <GiphyGrid 
            onSelect={ (e) => { console.log(e)} }
            onFavClick= { this.handleFavClick }
            data={ gridData } 
          />
        </div>
      </Container>
    );
  }
}
export const mapStateToProps = state => {
  const { search, trending, favorites } = state;

  return {
    search,
    trending,
    favorites
  };
};

export const mapDispatchToProps = dispatch => {
  const searchRequest = searchActions.creators.searchRequest;
  const trendingRequest = trendingActions.creators.trendingRequest;
  const toggleFavoritesReq = favActions.creators.toggleFavoritesReq;
  const loadFavorites = favActions.creators.loadFavorites;
  return bindActionCreators({
    searchRequest,
    trendingRequest,
    toggleFavoritesReq,
    loadFavorites
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchLayout);
