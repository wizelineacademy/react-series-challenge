import React from 'react';
import { shallow } from 'enzyme';
import Navbar from "../../components/Navbar";

it('App renders correctly', () => {
    shallow(<Navbar />);
  });