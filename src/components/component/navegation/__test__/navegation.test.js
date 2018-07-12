import React from 'react';
import { shallow } from 'enzyme';

import toJson from 'enzyme-to-json';


import Navegation from "./../index";

describe('<Navegation> ', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Navegation />
    );
  });

  it('create a Snapshot ', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});