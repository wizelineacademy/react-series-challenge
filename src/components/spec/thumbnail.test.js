import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';

import { Thumbnail } from '../';

describe('<Thumbnail />', () => {
  const props = {
    gif: {
      id: 'asdfljlk3-ffgfg',
      title: 'Example image',
      images: {
        fixed_width_downsampled: { url: 'http://www.example.com/image.jpg' },
      },
    },
    toggleFavorite: jest.fn(),
  };

  test('renders data correctly with verified user', () => {
    props.isFav = true;
    const tree = renderer.create(
      <StaticRouter location="" context={{}}>
        <Thumbnail {...props} />
      </StaticRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders data correctly with non verified user', () => {
    props.isFav = false;
    const tree = renderer.create(
      <StaticRouter location="" context={{}}>
        <Thumbnail {...props} />
      </StaticRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
