import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Home, Favorites, SearchBar, Search } from './components';
import history from './history';

const StyledAppContent = styled.div`
  width: 960px;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.dimensions.searchBar.height};
`;

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <SearchBar />
          <StyledAppContent>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search/:query" component={Search} />
              <Route path="/favorites" component={Favorites} />
            </Switch>
          </StyledAppContent>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
