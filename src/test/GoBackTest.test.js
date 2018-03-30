import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import GoBackControl from '../components/GoBackControl';

describe('GoBackControl', () => {

  it('Should render correctly', () => {
    const output = shallow(
      <GoBackControl>Go Back</GoBackControl>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  
})
