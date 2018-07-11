import React from 'react';
import { shallow } from 'enzyme';

import Footer from "./../index";

describe('<Footer> ', () => {

  let wraper;

  beforeAll(() => {
    wraper = shallow(
      <Footer />
    );
  });

  it('should be <footer></footer> type ', () => {
    expect(wraper.type()).toEqual('footer');
  });

  it('should be footer have a <div></div> children  ', () => {
    expect(wraper.find('div').type()).toEqual('div');
  });
});
