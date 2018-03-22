import React from 'react';
import { shallow } from 'enzyme';
import Page from '../../Message';

describe('<Page />', () => {
  it('Page must be rendered without crashing', () => {
    const wrapper = shallow(
      <Page />
    );
    expect(wrapper.is('div')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
