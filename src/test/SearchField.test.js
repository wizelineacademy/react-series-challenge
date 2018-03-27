import React from 'react';
import { shallow } from 'enzyme';
import SearchField from '../components/SearchField';

describe('test SearchField Render', () => {
  it('render structure', () => {
    const component = shallow(<SearchField />);
    expect(component).toMatchSnapshot();
  });
});