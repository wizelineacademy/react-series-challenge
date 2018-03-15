import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Image from '../components/Image';

describe('Image', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Image alt="mockTitle" src="mockUrl" />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
