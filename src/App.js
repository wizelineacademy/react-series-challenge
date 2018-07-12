import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import SearchGif from './components/SearchGif/SearchGif';
import MainGifsView from './components/MainGifsView/MainGifsView';
import FavoriteGifs from './components/FavoriteGifs/FavoriteGifs';
import NotFound from './components/NotFound/NotFound';

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

                      <Route exact path="/trending" component={MainGifsView}/>
                      <Route exact path="/favorites" component={FavoriteGifs}/>
                      <Redirect exact from="/" to="/trending"/>
                      <Route component={NotFound} />

                  </Switch>
              </MainContainer>
          </main>

      </div>
    );
  }
}

export default App;
