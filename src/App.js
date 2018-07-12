import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {
  Route,
  Redirect,
  NavLink,
  Switch,
} from 'react-router-dom';
import logo from './logo.svg';

import HomeComponent from './components/HomeComponent';
import FavoritesComponent from './components/FavoritesComponent';

import { ThemeProvider } from 'styled-components';
import { AppStyled } from './styled/AppStyled.styled';

const myTheme = {
  bg: 'white',
  cardColor: '#61dafb',
  textColor: 'black',
};
const darkTheme = {
  bg: '#1d1f27',
  cardColor: '#61dafb',
  textColor: 'white',
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      theme: myTheme,
      isDark: false
    };
  }
  toggleTheme = () => {
    this.setState({
      isDark: !this.state.isDark,
      theme: !this.state.isDark?darkTheme:myTheme
    })
  };
  render() {
    return (
       <ThemeProvider theme={this.state.theme}><Provider store={store} >
        <AppStyled>
          <header>
            <ul>
              <li><NavLink to='/' activeclass='active'><img src={logo} alt="logo" /></NavLink></li>
              <li><NavLink to='/Home' activeclass='active'>Home</NavLink></li>
              <li><NavLink to='/Favorites' activeclass='active'>Favoritos</NavLink></li>
              <li><button onClick={this.toggleTheme}>Toggle Theme</button></li>
            </ul>
          </header>
          <Switch>
            <Route exact path='/' component={HomeComponent} />
            <Route exact path='/Home' component={HomeComponent} />
            <Route exact path='/Favorites' component={FavoritesComponent} />
            <Redirect to='/Home' />
          </Switch>
        </AppStyled>
      </Provider></ThemeProvider>
    );
  }
}

export default App;
