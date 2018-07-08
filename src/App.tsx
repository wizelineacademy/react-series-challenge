import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider} from 'react-redux';

import store from './store';
import ROUTES from './routes';
import Header from './components/presentational/Header';
import { Container } from './components/presentational/Layout';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
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
        </Router>
      </Provider>
    );
  }
}
export default App;
