import React, { Component } from 'react';
import {Container} from "./App.styled";
import {SearchBar} from "./components/SearchBar/SearchBar";
import {GifList} from "./components/GifList/GifList";
import {getTrendingGifs} from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }
  componentDidMount() {
    getTrendingGifs()
      .then(result => {
        console.log(result);
        this.setState({
          gifs: result.data
        });
      });
  }
  render() {
    return (
      <Container>
        <SearchBar />
        <GifList gifs={this.state.gifs} />
      </Container>
    );
  }
}

export default App;
