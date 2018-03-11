import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PageWrapper } from './components';
import { Template, NotFound } from './views';

export default () => (
  <PageWrapper>
    <Router>
      <Switch>
        <Route exact path="/" component={Template} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </PageWrapper>
);
