import React, { Component } from 'react';
import {Container} from "./App.styled";
import {SearchBar} from "./components/SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
        <div>
            <p>ListOfGifs</p>
        </div>
      </Container>
    );
  }
}

export default App;
