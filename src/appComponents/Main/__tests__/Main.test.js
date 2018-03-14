import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../../Main';

describe('<Main />', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});
