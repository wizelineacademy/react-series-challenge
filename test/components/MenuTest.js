import React from 'react';
import { Menu } from '../../src/components/Menu';
import { NavLink }  from '../../src/components/Menu/Menu.Styled';
import { shallow, mount } from 'enzyme';
// import sinon from 'sinon';

describe('Menu --',() => {

  test('Menu mounts', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper).toHaveLength(1);
  });

  test('NavLink mounts', () => {
    const wrapper = shallow(<NavLink to='/test' activeClassName='hi'/>);
    expect(wrapper.find('.hi')).toBeTruthy();
  });
})

