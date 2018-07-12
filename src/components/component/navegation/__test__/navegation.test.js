import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from "react-router-dom";

import Navegation from "./../index";

describe('<Navegation> ', () => {

  let wraper;

  beforeAll(() => {
    wraper = shallow(
      <Navegation />
    );
  });

  it('should have two (2) NavLinks', () => {
    expect(wraper.find(NavLink).length).toEqual(2);
  });
});