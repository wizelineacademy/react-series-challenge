import React, { Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import SearchGif from './components/SearchGif/SearchGif';
import MainGifsView from './components/MainGifsView/MainGifsView';
import { Navbar, MainContainer, LogoContainer, SearchContainer } from './App.styled';

class App extends Component {
  render() {
    return (
      <div>
          <header>
              <Navbar>
                  <LogoContainer>
                      {/*<Logo src="http://yquetecuento.com/wp-content/uploads/2017/10/giphy_logo_square_social.png"/>*/}
                      <h1>Giphy Explorer</h1>
                  </LogoContainer>

                  <SearchContainer>
                      <SearchGif />
                  </SearchContainer>
              </Navbar>
          </header>

          <main>
              <MainContainer>
                  <Switch>

                      <Route path="/" component={MainGifsView}/>

                  </Switch>
              </MainContainer>
          </main>

      </div>
    );
  }
}

export default App;
