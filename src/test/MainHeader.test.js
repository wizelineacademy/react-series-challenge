import React from 'react';
import { shallow } from 'enzyme';
import MainHeader from '../components/MainHeader';
import NavMain from '../components/NavMain';

describe('test MainHeader Render', () => {
  it('render structure', () => {
    const component = shallow(<MainHeader />);
    expect(component).toMatchSnapshot();
  });
});

describe('test Main Nav Render', () => {
  it('render nav structure', () => {
    const component = shallow(<NavMain />);
    expect(component).toMatchSnapshot();
  });
})