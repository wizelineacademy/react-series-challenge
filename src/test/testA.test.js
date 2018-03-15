import React from 'react';
import { shallow } from 'enzyme';
const ABC = ({ children }) => <div>{children}</div>;

describe('test', () => {
  it('will work', () => {
    const component = shallow(<ABC>hola</ABC>);
    console.log(component.debug())
    expect(component.text()).toBe('hola');
  });
});
