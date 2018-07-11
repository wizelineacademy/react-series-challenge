import React from 'react';
import { shallow } from 'enzyme';

import { AppContainer } from '../../components/AppContainer';

describe('Header component', () => {
  test('should shallow correctly', () => {
    const header = shallow(<AppContainer />);

    expect(header).toMatchSnapshot();
  });
});
