import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import App from '../App';
import {DetailsRouterPipe} from '../App';

describe('App', () => {

  it('Should render correctly', () => {
    const output = shallow(
      <App/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Should render the pipe router correctly', () => {
    const output = shallow(
      <DetailsRouterPipe match={{url: 'test'}}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
