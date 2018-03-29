import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from './store';


import TrendingList from './components/TrendingList';
import SearchResults from './components/SearchResults';
import SearchBox from './components/SearchBox';
import FavoriteList from './components/FavoriteList';
import GiphyDetail from './components/GiphyDetail';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app-root">
          <SearchBox/>          
          <div className="app">
            
            <Route path='/' exact component={TrendingList}/>
            <Route path='/favorites' component={FavoriteList}/>
            <Route path='/search' component={SearchResults}/>
            <Route path='/gif/:giphy_id' component={GiphyDetail}/>
            
          </div>
          <Menu/>
        </div>
      </Provider>
    );
  } 
}

export default App;
