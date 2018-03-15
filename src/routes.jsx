import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navigation, PageWrapper } from './components';
import { Home, Favorites, Details, Search, NotFound } from './views';
import { SearchFormWrapper, SearchInput, SearchButton } from './components/search-form';

const onSearch = (e, history) => {
  e.preventDefault();
  const { value } = e.target[0];
  history.push(`/search/${encodeURI(value)}`);
};

export const RouteWithTopNav = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <div>
      <Navigation />
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
        <RouteWithTopNav exact path="/" component={Home} />
        <RouteWithTopNav exact path="/favorites" component={Favorites} />
        <RouteWithTopNav exact path="/gifs/:id" component={Details} />
        <RouteWithTopNav exact path="/search/:text" component={Search} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </PageWrapper>
);
