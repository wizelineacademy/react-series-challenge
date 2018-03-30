import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import CenterContenteDiv from '../styles/containers/CenterContenteDiv';

describe('CenterContenteDiv', () => {
  it('Should render correctly', () => {
    const output = shallow(
      <CenterContenteDiv/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should render width custom padding', () => {
    const output = shallow(
      <CenterContenteDiv padding="15px"/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should render with coverAll flag', () => {
    const output = shallow(
      <CenterContenteDiv coverAll/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should render width direction column', () => {
    const output = shallow(
      <CenterContenteDiv direction="column"/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
