import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {Container} from "./App.styled";
import {SearchBar} from "./components/SearchBar/SearchBar";
import GifList from "./components/GifList/GifList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <SearchBar />
          <GifList/>
        </Container>
      </Provider>
    );
  }
}
export default App;
