import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ItemsList from '../ItemsList';
import SearchBar from '../SearchBar';
import actions from '../../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getMoreGifs(1);
  }

  componentWillUnmount() {
    this.props.clearInput();
  }

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <SearchBar handleSearch={this.props.getMoreGifs.bind(this, 1)} />
        <ItemsList favoritesButton={this.props.addRemoveFavoriteHome} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  const {
    getMoreGifs,
    searchChange,
    addRemoveFavoriteHome,
    clearInput,
  } = actions;

  return bindActionCreators(
    {
      getMoreGifs,
      searchChange,
      addRemoveFavoriteHome,
      clearInput,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
