import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';

import { Navigation } from '../';

describe('<Navigation />', () => {
  test('renders data correctly', () => {
    const tree = renderer.create(
      <StaticRouter location="" context={{}}>
        <Navigation />
      </StaticRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
