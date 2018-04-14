import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import {ErrorWatcher} from '../components/presentational';

describe('ErrorWatcher', () => {
  it('should render correctly', () => {
    const output = shallow(
      <ErrorWatcher />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Set visible true', () => {
    const wrapper = shallow(
      <ErrorWatcher visible={true} />
    );
    const section = wrapper.find('section');
    expect(section.exists()).toEqual(true);
  });
});
