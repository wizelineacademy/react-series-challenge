import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PageWrapper } from './components';
import { Home, Favorites, Details, Search, NotFound } from './views';
import { SearchFormWrapper, SearchInput, SearchButton } from './components/search-form';

const onSearch = (e, history) => {
  e.preventDefault();
  const { value } = e.target[0];
  history.push(`/search/${encodeURI(value)}`);
};

const RouteWithSearch = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <div>
      <SearchFormWrapper onSubmit={e => onSearch(e, props.history)}>
        <SearchInput type="text" placeholder="Search all the GIFs" />
        <SearchButton><i className="fas fa-search" /></SearchButton>
      </SearchFormWrapper>
      <Component {...props} />
    </div>
  )}
  />
);

export default () => (
  <PageWrapper>
    <Router>
      <Switch>
        <RouteWithSearch exact path="/" component={Home} />
        <RouteWithSearch exact path="/favorites" component={Favorites} />
        <RouteWithSearch exact path="/gifs/:id" component={Details} />
        <RouteWithSearch exact path="/search/:text" component={Search} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </PageWrapper>
);
