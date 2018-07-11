import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import GifPage from './components/GifPage/GifPage'
import GifFavorite from './components/GifFavorite/GifFavorite';
import { GifSection, StyledHeader, StyledNavLink, StyledUl, StyledLi, StyledDiv } from './App.styled'
import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themeSunny, themeNightly } from './globalInjection'
import ThemeSelector from './components/ThemeSelector/ThemeSelector'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nightMode: true,
    }
  }

  changeTheme = () => {
    this.setState ( (prevState) => ({ nightMode: !prevState.nightMode }) );
    console.log("Estado es: " + this.state.nightMode);
  }

  render() {
    return (
      <ThemeProvider theme = { this.state.nightMode ? themeSunny : themeNightly }>
        <Provider store = {store}>
        <StyledDiv>   
              <StyledHeader {...this.props}>
                <StyledUl>
                    <StyledLi><StyledNavLink 
                    to = "/home"
                    activeClassName = "act"
                    exact>
                    Home </StyledNavLink></StyledLi>

                    <StyledLi><StyledNavLink 
                    to = "/favorite"
                    activeClassName = "act"
                    exact>
                    Favorites</StyledNavLink></StyledLi>
                </StyledUl>
                <ThemeSelector changeTheme = {this.changeTheme}/>
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
      </ThemeProvider>
    );
  }
}

export default App;
