import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import { Search } from '../';

const mockStore = configureMockStore();

describe('<Search />', () => {
  const props = {
    fetchGifs: jest.fn(),
    match: { params: { text: 'wizeline' } },
  };

  test('renders null if no data and not loading', () => {
    const initialState = {
      favorites: [],
      search: {
        data: undefined,
        loading: false,
      },
    };
    const tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <StaticRouter location="" context={{}}>
          <Search {...props} />
        </StaticRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders loader', () => {
    const initialState = {
      favorites: [],
      search: {
        data: undefined,
        loading: true,
      },
    };
    const tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <StaticRouter location="" context={{}}>
          <Search {...props} />
        </StaticRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders error message', () => {
    const initialState = {
      favorites: [],
      search: {
        data: undefined,
        loading: true,
        error: { message: 'Something went wrong' },
      },
    };
    const tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <StaticRouter location="" context={{}}>
          <Search {...props} />
        </StaticRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders data correctly', () => {
    const initialState = {
      favorites: [],
      search: {
        data: {
          pagination: { count: 1, offset: 0, total_count: 1 },
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
    const tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <StaticRouter location="" context={{}}>
          <Search {...props} />
        </StaticRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
