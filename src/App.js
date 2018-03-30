import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import {} from './styles/global';
import AppContainer from './styles/containers/App';
import CenterContenteDiv from './styles/containers/CenterContenteDiv';
import MainMenuContainer from './styles/containers/MainMenuContainer';
import NavLink from './components/NavLink';
import HomeView from './components/HomeView';
import FavoritesView from './components/FavoritesView';
import DetailsView from './components/DetailsView';
import {HOME_PATH, FAVORITES_PATH, DETAILS_PATH, DETAILS_VARIABLE_PATH}
  from './config/routerConstants';

export const DetailsRouterPipe = ({match}) => (
  <div>
    <Route path={`${match.url}/:${DETAILS_VARIABLE_PATH}`} component={DetailsView}/>
  </div>
);

class App extends Component {
  render() {
    return (
      <AppContainer>
        <header>
          <MainMenuContainer>
            <CenterContenteDiv padding="15px">
              <NavLink exact to={HOME_PATH}>Home</NavLink>
            </CenterContenteDiv>
            <CenterContenteDiv padding="15px">
              <NavLink exact to={FAVORITES_PATH}>Favorites</NavLink>
            </CenterContenteDiv>
          </MainMenuContainer>
        </header>
        <Route path={HOME_PATH} exact component={HomeView}/>
        <Route path={FAVORITES_PATH} exact component={FavoritesView}/>
        <Route path={DETAILS_PATH} component={DetailsRouterPipe}/>
      </AppContainer>
    );
  }
}

export default App;
