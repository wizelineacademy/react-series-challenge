import * as React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import ROUTES from './routes';
import Header from './components/presentational/Header';
import { Container } from './components/presentational/Layout';

class App extends React.Component {
  public render() {
    return (
      <Container>
        <Header />
        <section>
        <Switch>
          {ROUTES.map(({path, component, exact}) =>
            <Route key={path} path={path} exact={exact} component={component} />)}
          <Redirect to='/home' />
        </Switch>
        </section>
      </Container>
    );
  }
}

export default App;
