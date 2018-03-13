import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GiphyGrid } from '../../components/Giphy';
import { bindActionCreators } from 'redux';
import searchActions from '../../actions/search';
import trendingActions from '../../actions/trending';
import SearchComponentInput from '../../components/SearchComponent';
import pathNames from '../../routes';
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
    switch (params.view){
      case pathNames.TRENDING_PATH: {
        this.props.trendingRequest();
        break;
      }
      case pathNames.SEARCH_PATH: {
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
      params
    } = this.props.match
    if (nextProps.match.params.searchTerm 
      !== params.searchTerm 
      && nextProps.match.params.view === pathNames.SEARCH_PATH ) {
      this.props.searchRequest(nextProps.match.params.searchTerm);
    }

  }

  getGridData = () =>{
    const {
      match,
      trending,
      search
    } = this.props;
    switch(match.params.view){
      case pathNames.TRENDING_PATH:{
        return trending.giphyArray
      }
      case pathNames.SEARCH_PATH:{
        return search.giphyArray
      }
      default:
        return trending.giphyArray;
    }
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
            data={ gridData } 
          />
        </div>
      </Container>
    );
  }
}
export const mapStateToProps = state => {
  const { search, trending } = state;

  return {
    search,
    trending
  };
};

export const mapDispatchToProps = dispatch => {
  const searchRequest = searchActions.creators.searchRequest;
  const trendingRequest = trendingActions.creators.trendingRequest
  return bindActionCreators({
    searchRequest,
    trendingRequest
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchLayout);
