import React from 'react'
import Routes from '../Routes'
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';


describe('Routes', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Routes />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
