import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import Routes from './routes';

const mockStore = configureMockStore();

describe('<Routes />', () => {
  const initialState = { };

  test('renders data correctly', () => {
    const tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <StaticRouter location={{ pathname: '/404' }} context={{}}>
          <Routes />
        </StaticRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
