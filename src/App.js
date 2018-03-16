import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Home, Favorites, SearchBar, Search, GifDetails } from './components';
import history from './history';

const StyledAppContent = styled.div`
  width: 960px;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.dimensions.searchBar.height};
`;

const App = () => (
  <Router history={history}>
    <React.Fragment>
      <SearchBar />
      <GifDetails />
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

export default App;
