import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImagesList from '../imagesList';
import SearchBar from '../searchBar';
import actions from '../../actions';
import Wrapper from '../wrapper';


class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.props.getFavorites(1);
  }

  render() {

    if(this.props.loading){
      return <div>Loading...</div>
    }
    return (
      <Wrapper>
        <SearchBar
          handleChange={this.props.changeFavoritesFilter}
          handleSearch={this.props.filterFavorites}
          value={this.props.search}
        />
        <ImagesList
          list={this.props.finalList}
          buttonClick={this.props.addRemoveFavorites}
        />
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const {
    getFavorites,
    getNextFavoritesPage,
    getPrevFavoritesPage,
    filterFavorites,
    changeFavoritesFilter,
    addRemoveFavorites
  } = actions

  return bindActionCreators({
    getFavorites,
    getNextFavoritesPage,
    getPrevFavoritesPage,
    filterFavorites,
    changeFavoritesFilter,
    addRemoveFavorites
  }, dispatch);
}

const mapStateToProps = ({ favorites }) => {
  const {
    loading,
    finalList,
    search,
    paginator
  } = favorites;

  return { 
    loading,
    finalList,
    search,
    paginator
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);