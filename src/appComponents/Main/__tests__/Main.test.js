import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../Main';

describe('<Main />', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});
