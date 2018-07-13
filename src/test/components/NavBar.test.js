import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../../components/NavBar';
import {StyledNavLink} from "../../components/styled/NavBar.styled";

describe('NavBar', () => {

  it('Navbar has 2 navlinks inside', () => {
    expect(shallow(<NavBar />).find(StyledNavLink)).toHaveLength(2);
  });

});