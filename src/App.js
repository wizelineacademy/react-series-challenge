import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import GifPage from './components/GifPage/GifPage'
import GifFavorite from './components/GifFavorite/GifFavorite';
import { GifSection, StyledHeader, StyledNavLink, StyledUl, StyledLi, StyledDiv } from './App.styled'
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <StyledDiv>   
            <StyledHeader>
              <StyledUl>
                  <StyledLi><StyledNavLink 
                  to = "/home"
                  exact>
                  Home </StyledNavLink></StyledLi>

                  <StyledLi><StyledNavLink 
                  to = "/favorite"
                  exact>
                  Favorites</StyledNavLink></StyledLi>
              </StyledUl>
            </StyledHeader>
            <GifSection>
              <Switch>
                <Route path = "/home" exact component = {GifPage} />
                <Route path = "/favorite" exact component = {GifFavorite} />
                <Redirect from = "/" to = "/home" />
              </Switch>
            </GifSection>
      </StyledDiv>
      </Provider>
    );
  }
}

export default App;
