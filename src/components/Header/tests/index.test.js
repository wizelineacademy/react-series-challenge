import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../index';

describe('Header styled components', () => {
  describe('Header styled component', () => {
    it('should have the correct styles', () => {
      const component = shallow(<Header />);
      expect(component).toMatchSnapshot();
    });
  });
});
