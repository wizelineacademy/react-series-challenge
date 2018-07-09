import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import SearchGif from './components/SearchGif/SearchGif';
import MainGifsView from './components/MainGifsView/MainGifsView';
import FavoriteGifs from './components/FavoriteGifs/FavoriteGifs';

import { Navbar, NavMenu, NavItem, Link, MainContainer, LogoContainer } from './App.styled';

class App extends Component {
  render() {
    return (
      <div>
          <header>
              <Navbar>
                  <LogoContainer>

                      <NavMenu>

                          <NavItem>
                              <Link to="/trending"><i className="fas fa-home" /></Link>
                          </NavItem>

                          <NavItem>
                              <Link to="/favorites">Favorites</Link>
                          </NavItem>

                          <NavItem float={'right'}>
                              <SearchGif />
                          </NavItem>

                      </NavMenu>

                  </LogoContainer>
              </Navbar>
          </header>

          <main>
              <MainContainer>
                  <Switch>

                      <Route path="/trending" component={MainGifsView}/>
                      <Route path="/favorites" component={FavoriteGifs}/>
                      <Redirect from="/" to="/trending"/>

                  </Switch>
              </MainContainer>
          </main>

      </div>
    );
  }
}

export default App;
