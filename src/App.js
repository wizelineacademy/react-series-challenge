import React, { Component } from 'react';
import {Container} from "./App.styled";
import {SearchBar} from "./components/SearchBar/SearchBar";
import {GifList} from "./components/GifList/GifList";

class App extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
        <GifList />
      </Container>
    );
  }
}

export default App;
