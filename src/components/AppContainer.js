import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import gifActions from '../actions/gifActions';

import GifGrid from '../components/GifGrid';
import SearchBar from '../components/SearchBar';

import { ContainerWrapper } from '../styles/ContainerWrapper.style.js';


export class AppContainer extends Component {
  componentDidMount() {
    const { getTrendingGifs } = this.props;

    getTrendingGifs();
  }

  render() {
    const { gifs, favorites } = this.props;

    return (
      <ContainerWrapper className="mt">
        <SearchBar />

        <Switch>
          <Route
            exact
            path="/"
            render={({ match }) => (
              <GifGrid gifs={ gifs } />
            )}
          />
          <Route
            path="/favorites"
            render={({ match }) => (
              <GifGrid gifs={ favorites } />
            )}
          />
        </Switch>
      </ContainerWrapper>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  const { getTrendingGifs } = gifActions.creators;

  return bindActionCreators({ getTrendingGifs }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
