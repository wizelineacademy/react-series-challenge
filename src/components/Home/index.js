import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ItemsList from '../ItemsList';
import SearchBar from '../SearchBar';
import actions from '../../actions';
import { Wrap } from './index.style';

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

  getMoreGifs = () => this.props.getMoreGifs.bind(this, 1);

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }
    return (
      <Wrap>
        <SearchBar handleSearch={this.getMoreGifs} />
        <ItemsList favoritesButton={this.props.addRemoveFavoriteHome} />
      </Wrap>
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

const mapStateToProps = state => {
  const { loading } = state.loading;
  return { loading };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
