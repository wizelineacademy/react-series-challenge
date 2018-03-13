import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import { Details } from '../';

const mockStore = configureMockStore();

describe('<Grid />', () => {
  const props = {
    fetchGif: jest.fn(),
    toggleFavorite: jest.fn(),
    match: { params: { id: 'asdfljlk3-ffgfg' } },
  };
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
    },
  };

  test('renders data correctly with verified user', () => {
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
