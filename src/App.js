import React, { Component } from 'react';
import SearchGif from './components/SearchGif';

class App extends Component {
  render() {
    return (
      <div>
          <header>
              <h1>Giphy Explorer</h1>
              <SearchGif />
          </header>

          <main>
              <div>
              </div>
          </main>

      </div>
    );
  }
}

export default App;
