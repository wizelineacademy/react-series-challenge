import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Grid } from '../';

const mockStore = configureMockStore();

describe('<Grid />', () => {
  const initialState = { favorites: [] };

  test('renders data correctly', () => {
    const props = {
      data: [
        {
          id: 'asdfljlk3-ffgfg',
          title: 'Example image',
          images: {
            fixed_width_downsampled: { url: 'http://www.example.com/image.jpg' },
          },
        },
      ],
      toggleFavorite: jest.fn(),
    };

    const tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <StaticRouter location="" context={{}}>
          <Grid {...props} />
        </StaticRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders data correctly without data', () => {
    const props = {
      data: undefined,
      toggleFavorite: jest.fn(),
    };
    const tree = renderer.create(
      <Provider store={mockStore(initialState)}>
        <StaticRouter location="" context={{}}>
          <Grid {...props} />
        </StaticRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
