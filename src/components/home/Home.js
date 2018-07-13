import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import gifsActions from '../../actions/gifs';
import { List } from '../gif';
import Search from '../search';
import { Home as HomeStyled } from './Home.style';

class Home extends Component {
  componentDidMount() {
    this.props.loadDataStart();
  }

  render() {
    return (
      <HomeStyled>
        <Search searchAction={this.props.search} />
        <List
          gifs={this.props.gifs}
          favorites={this.props.favorites}
          toggleFavorite={this.props.toggleFavorite}
        />
      </HomeStyled>
    );
  }
}

const mapStateToProps = state => {
  const gifs = state.data.searchQuery
    ? state.data.searchResults
    : state.data.gifs;
  return {
    gifs,
    favorites: state.data.favorites
  };
};

const mapDispatchToProps = dispatch => {
  const { loadDataStart, toggleFavorite, search } = gifsActions.creators;

  return bindActionCreators(
    {
      loadDataStart,
      toggleFavorite,
      search
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
