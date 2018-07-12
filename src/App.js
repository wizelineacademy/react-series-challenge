import React, { Component } from 'react';
import FavElements from './components/FavElements';
import ElementsView from './components/ElementsView';
import {Route, Redirect, Switch} from "react-router-dom";
import {Bar,Menu,Item,Link} from './App.styled';
import SearchBar from './components/SearchBar';
export const FAV_GIFS_VIEW = '/favElements';
export const ALL_GIFS_VIEW = '/allElements';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Giphys app</h1>
        </header>
          <div>
              <Bar>
                  <Menu>
                      <Item>
                          <Link to={ALL_GIFS_VIEW}>Gifs</Link>
                      </Item>
                      <Item>
                          <Link to={FAV_GIFS_VIEW}>FavGifs</Link>
                      </Item>
                  </Menu>
              </Bar>

              <h2>Click on image to add or delete</h2>
              <SearchBar />
              <Switch>
                  <Route exact path={ALL_GIFS_VIEW} component={ElementsView} />
                  <Route exact path={FAV_GIFS_VIEW} component={FavElements} />
                  <Redirect from="/" to={ALL_GIFS_VIEW}/>
              </Switch>

          </div>


          
      </div>
    );
  }
}

export default App;
