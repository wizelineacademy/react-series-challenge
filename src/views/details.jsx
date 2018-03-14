import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { gifActions, favoritesActions } from '../actions';
import { UserCard, Loader } from '../components';

const DetailsWrapper = styled.div`
  ::after {
    content: '';
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
  }
`;

const DetailsLeftSidebar = styled.div`
  float:left;
  width: 250px;
`;

const DetailsRightSidebar = styled.div`
  float: right;
  width: 250px;
`;

const DetailsContent = styled.div`
  float:left;
  max-width: 530px;
`;

const Gif = styled.img`
  max-width: 100%;
  height: auto;
`;

class Details extends Component {
  static propTypes = {
    data: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.object,
    match: PropTypes.object,
    fetchGif: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
    favorites: PropTypes.array.isRequired,
    fetchFavorites: PropTypes.func.isRequired,
  }
  static defaultProps = {
    data: undefined,
    error: undefined,
    loading: false,
    match: { },
  }

  componentDidMount = () => {
    const { match: { params: { id } } } = this.props;
    this.props.fetchFavorites();
    this.props.fetchGif(id);
  }

  isFavorite = image => this.props.favorites.some(item => item.id === image.id);

  render() {
    const { data, loading, error, toggleFavorite } = this.props;
    if (error) return (<div>{error.message}</div>);
    if (!data && !loading) return null;

    return (
      <DetailsWrapper>
        <DetailsLeftSidebar>
          { loading && <Loader /> }
          { !loading && data.data.user && <UserCard data={data.data.user} /> }
        </DetailsLeftSidebar>
        <DetailsContent>
          { loading && <Loader /> }
          { !loading && <Gif src={data.data.images.original.url} alt={data.data.title} /> }
        </DetailsContent>
        <DetailsRightSidebar>
          { !loading && <button onClick={() => toggleFavorite(data.data)}>{this.isFavorite(data.data) ? 'Remove from favorites!' : 'Add to Favorites'}</button>}
        </DetailsRightSidebar>
      </DetailsWrapper>
    );
  }
}

export default connect(
  ({ gif: { data, error, loading }, favorites }) => ({ data, error, loading, favorites }),
  { fetchGif: gifActions.creators.requestGIF, toggleFavorite: favoritesActions.creators.requestToggle, fetchFavorites: favoritesActions.creators.fetchFavorites },
)(Details);
