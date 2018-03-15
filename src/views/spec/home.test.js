import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import { Home } from '../';

const mockStore = configureMockStore();

describe('<Home />', () => {
  const props = { loadingTrending: jest.fn() };
  const initialState = {
    favorites: [],
    trending: {
      data: {
        data: [
          {
            id: 'asdfljlk3-ffgfg',
            title: 'Example image',
            images: {
              fixed_width_downsampled: {
                url: 'http://www.example.com/image.jpg',
                width: '800',
                height: '900',
              },
            },
            user: {
              username: 'krilbert',
              display_name: 'Alfer',
              profile_url: 'http://www.example.com',
              avatar_url: 'http://www.example.com/avatar.jpg',
            },
          },
        ],
      },
      loading: false,
    },
  };

  test('renders loader', () => {
    initialState.trending.loading = true;
    const tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <StaticRouter location="" context={{}}>
          <Home {...props} />
        </StaticRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders data correctly', () => {
    initialState.trending.loading = false;
    const tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <StaticRouter location="" context={{}}>
          <Home {...props} />
        </StaticRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
