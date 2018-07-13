import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Footer from "./../index";

describe('<Footer> ', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Footer />
    );
  });

  it('Will check with the snaptshot ', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
