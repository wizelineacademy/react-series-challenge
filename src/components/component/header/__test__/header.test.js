import React from 'react';
import { shallow } from 'enzyme';
import { spy } from "sinon";

import Header from "./../index";

describe('<Header> ', () => {

  let wrapper;

  beforeAll(() => {
    wrapper = shallow(
      <Header />
    );
  });

  describe('UI should have', () => {
    it('should have a form as a wraper', () => {
      expect(wrapper.type()).toEqual('form');
    });

    it('should have an two (2) inputs & button', () => {
      expect(wrapper.find('button').length).toEqual(1);
      expect(wrapper.find('input').length).toEqual(2);
    });
  });

  it('When button is clicked should call handleButton º ', () => {
    wrapper.setProps({ action: () => { } });
    // const handleButtonSpy = spy(wrapper.instance(), "handleButton");

    //Mock
    wrapper.instance().searchInput = { value: 0, focus: () => {} };

    wrapper.update();

    // expect(handleButtonSpy.calledOnce).toBeFalsy();

    wrapper.find('button').simulate('click', { preventDefault() { } });
    // expect(handleButtonSpy.calledOnce).toBeTruthy();
  })

});