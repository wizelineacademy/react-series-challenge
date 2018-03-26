import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import store from './store';
import './App.css';

import TrendingList from './components/TrendingList';
import SearchResults from './components/SearchResults';
import SearchBox from './components/SearchBox';
import FavoriteList from './components/FavoriteList';
class App extends Component {
  constructor(props)
  {
    super(props);

  }
  componentDidMount()
  {
    /*fetch('http://api.giphy.com/v1/gifs/trending?api_key=kLIQQQN3aix9cb3YOKkP6kXlVIWjmsBI').then((resp) => resp.json()).then(
      response => console.log(response),
      error => console.log(error)
    )
    /*
    search: http://api.giphy.com/v1/gifs/search?api_key=kLIQQQN3aix9cb3YOKkP6kXlVIWjmsBI&q=food
    */
  }
  render() {
    return (
      <Provider store={store}>
        <div className="app-root">
          <TrendingList/>
          <SearchBox/>
          <SearchResults/>
          <FavoriteList/>
        </div>
      </Provider>
    );
  } 
}

export default App;
