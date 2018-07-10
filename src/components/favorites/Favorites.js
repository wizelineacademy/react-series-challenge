import React, { Component } from 'react';
import { connect } from 'react-redux';
import gifsActions from '../../actions/gifs';
import { List } from '../gif';
import { bindActionCreators } from 'redux';

class Favorites extends Component {
  componentDidMount() {
    this.props.loadDataStart();
  }

  render() {
    return (
      <List
        gifs={this.props.favorites}
        favorites={this.props.favorites}
        toggleFavorite={this.props.toggleFavorite}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    gifs: state.data.gifs,
    favorites: state.data.favorites
  };
};

const mapDispatchToProps = dispatch => {
  const { loadDataStart, toggleFavorite } = gifsActions.creators;

  return bindActionCreators(
    {
      loadDataStart,
      toggleFavorite
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
