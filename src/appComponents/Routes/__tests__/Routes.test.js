import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../../Routes';

describe('<Routes />', () => {
  it('App Routes must render without crashing', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
  });
});
