import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import {InputSearch} from '../components/presentational';

describe('InputSearch', () => {
  it('should render correctly', () => {
    const output = shallow(
      <InputSearch />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Has input and section', () => {
    const wrapper = mount(
      <InputSearch />
    );
    const section = wrapper.find('section');
    expect(section.exists()).toEqual(true);
    const input = wrapper.find('input');
    expect(input.exists()).toEqual(true);
  });
});
