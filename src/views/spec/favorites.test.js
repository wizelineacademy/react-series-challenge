import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import { Favorites } from '../';

const mockStore = configureMockStore();

describe('<Favorites />', () => {
  const props = { fetchFavorites: jest.fn() };
  const initialState = { favorites: [] };

  test('renders data correctly ', () => {
    const tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <StaticRouter location="" context={{}}>
          <Favorites {...props} />
        </StaticRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
