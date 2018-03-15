import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GiphyGrid } from '../../components/Giphy';
import { bindActionCreators } from 'redux';
import searchActions from '../../actions/search';
import trendingActions from '../../actions/trending';
import favActions from '../../actions/favorites';
import modalActions from '../../actions/modal';
import SearchComponentInput from '../../components/SearchComponent';
import Modal from '../../components/Modal';
import detailsActions from '../../actions/details';
import queryString from 'query-string';
import {
  Container
} from './GridLayout.styled';

export class GridLayout extends Component {
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
    let query = queryString.parse(this.props.location.search);
    if (query.details) {
      this.props.fetchDetails(query.details);
      this.props.showModal(query.details);
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
      case 'favorites':{
        return favorites.favorites;
      }
      default:
        return trending.giphyArray;
    }
  }

  handleFavClick = data =>{
    this.props.toggleFavoritesReq(data)
  }

  closeModal = () => {
    this.props.hideModal();
    const {
      history
    } = this.props;
    history.replace({...history.location, search: ``});
  }

  handleOnSelect = ghipy => {
    this.props.showModal(ghipy);
    const {
      history
    } = this.props;
    history.replace({...history.location, search: `?details=${ghipy}`});
    this.props.fetchDetails(ghipy);
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
            onSelect={ this.handleOnSelect }
            onFavClick= { this.handleFavClick }
            data={ gridData } 
          />
        </div>
        <Modal
          open={ this.props.modal.isModalOpen }
          selectedGiphy={ this.props.details }
          onFavClick= { this.handleFavClick }
          onCloseModal={this.closeModal}
        />
      </Container>
    );
  }
}
export const mapStateToProps = state => {
  const { search, trending, favorites, modal, details } = state;

  return {
    search,
    trending,
    favorites,
    modal,
    details
  };
};

export const mapDispatchToProps = dispatch => {
  const searchRequest = searchActions.creators.searchRequest;
  const trendingRequest = trendingActions.creators.trendingRequest;
  const toggleFavoritesReq = favActions.creators.toggleFavoritesReq;
  const loadFavorites = favActions.creators.loadFavorites;
  const hideModal = modalActions.creators.hideModal;
  const showModal = modalActions.creators.showModal;
  const fetchDetails = detailsActions.creators.fetchDetails;
  return bindActionCreators({
    searchRequest,
    trendingRequest,
    toggleFavoritesReq,
    loadFavorites,
    hideModal,
    showModal,
    fetchDetails
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(GridLayout);
