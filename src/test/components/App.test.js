import React from 'react';
import { shallow } from 'enzyme';

import App from '../../components/App';

describe('Header component', () => {
  test('should shallow correctly', () => {
    const header = shallow(<App />);

    expect(header).toMatchSnapshot();
  });
});
