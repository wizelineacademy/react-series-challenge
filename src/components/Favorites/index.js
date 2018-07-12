import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ItemsList from '../ItemsList';
import SearchBar from '../SearchBar';
import actions from '../../actions';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getFavoritesR(1);
  }

  componentWillUnmount() {
    this.props.clearInput();
  }

  getFavoritesR = () => this.props.getFavoritesR.bind(this, 1);

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <SearchBar
          handleChange={this.props.filterChange}
          handleSearch={this.getFavoritesR}
        />
        <ItemsList favoritesButton={this.props.addRemoveFavoriteView} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  const {
    addRemoveFavoriteView,
    getFavoritesR,
    filterChange,
    filterClick,
    clearInput,
  } = actions;

  return bindActionCreators(
    {
      addRemoveFavoriteView,
      getFavoritesR,
      filterChange,
      filterClick,
      clearInput,
    },
    dispatch
  );
};

const mapStateToProps = state => {
  const { loading } = state.loading;

  return {
    loading,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
