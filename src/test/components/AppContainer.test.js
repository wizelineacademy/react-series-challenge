import React from 'react';
import { shallow } from 'enzyme';

import { AppContainer } from '../../components/AppContainer';

describe('Header component', () => {
  test('should shallow correctly', () => {
    const getTrendingGifs = () => {};
    const header = shallow(<AppContainer getTrendingGifs={ getTrendingGifs } />);

    expect(header).toMatchSnapshot();
  });
});
