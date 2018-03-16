import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Home } from '../../components';
import wrap from '../wrapper';


describe('Component: Home', () => {
  it('will load correctly', () => {
    const component = renderer.create(wrap(<Home />)).toJSON();
    expect(component).toMatchSnapshot();
  });

  // it('will mount component with error boundary', () => {
  //   const component = mount(wrap(<Home />));
  //   console.log(component);
  // });
});
