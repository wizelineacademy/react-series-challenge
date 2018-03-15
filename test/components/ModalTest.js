import React from 'react';
import Modal from '../../src/components/Modal';
import GiphyDetails from '../../src/components/GiphyDetails';
import { shallow } from 'enzyme';
// import sinon from 'sinon';

describe('Modal --',() => {

  test('Modal mounts but not open', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find(GiphyDetails)).toHaveLength(0);
  });

  test('Modal mounts open', () => {
    const wrapper = shallow(<Modal open />);

    expect(wrapper.find(GiphyDetails)).toHaveLength(1);
  });
})

