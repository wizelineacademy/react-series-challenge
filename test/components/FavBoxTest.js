import React from 'react';
import { FavBox } from '../../src/components/FavBox';
import { shallow, mount } from 'enzyme';
// import sinon from 'sinon';

describe('FavBox --',() => {

  test('FavBox mounts', () => {
    const wrapper = shallow(<FavBox />);
    expect(wrapper).toHaveLength(1);
  });

  test('FavBox Text unchecked', () => {
    const props ={
      checked: false,
      onClick: jest.fn(),
      id : 'dummyID'
    }
    const wrapper = mount(<FavBox  {...props} />);
    const inst = wrapper.text();
    expect(inst).toEqual('Add to Favs');
  });


  test('FavBox Text checked', () => {
    const props ={
      checked: true,
      onClick: jest.fn(),
      id : 'dummyID'
    }
    const wrapper = mount(<FavBox {...props} />);
    const inst = wrapper.text();
    expect(inst).toEqual("Remove From Favs");
  });
});