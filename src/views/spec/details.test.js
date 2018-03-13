import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import { Details } from '../';

const mockStore = configureMockStore();

describe('<Details />', () => {
  const props = {
    fetchGif: jest.fn(),
    toggleFavorite: jest.fn(),
    match: { params: { id: 'asdfljlk3-ffgfg' } },
  };

  test('renders null if no data and not loading', () => {
    const initialState = {
      favorites: [],
      gif: {
        data: undefined,
        loading: false,
      },
    };
    const tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <StaticRouter location="" context={{}}>
          <Details {...props} />
        </StaticRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders loader', () => {
    const initialState = {
      favorites: [],
      gif: {
        data: undefined,
        loading: true,
      },
    };
    const tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <StaticRouter location="" context={{}}>
          <Details {...props} />
        </StaticRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders error message', () => {
    const initialState = {
      favorites: [],
      gif: {
        data: undefined,
        loading: true,
        error: { message: 'Something went wrong' },
      },
    };
    const tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <StaticRouter location="" context={{}}>
          <Details {...props} />
        </StaticRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders data correctly ', () => {
    const initialState = {
      favorites: [],
      gif: {
        data: {
          data: {
            id: 'asdfljlk3-ffgfg',
            title: 'Example image',
            images: {
              original: {
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
        },
        loading: false,
      },
    };
    const tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <StaticRouter location="" context={{}}>
          <Details {...props} />
        </StaticRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
