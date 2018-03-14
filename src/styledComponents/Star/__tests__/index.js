import React from 'react';
import { shallow } from 'enzyme';
import Star from '../../Star';

describe('<Favorite />', () => {
  it('Styled Component must render as not favorite', () => {
    const props = {
      starred: false,
    };

    const wrapper = shallow(<Star {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Styled Component must render as favorite', () => {
    const props = {
      starred: true,
    };

    const wrapper = shallow(<Star {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
