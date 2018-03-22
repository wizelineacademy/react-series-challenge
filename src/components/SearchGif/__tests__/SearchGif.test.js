import React from 'react';
import { shallow } from 'enzyme';
import SearchGif from '../../SearchGif';

describe('<SearchGif />', () => {
  it('SearchGif renders without crashing', () => {
    const wrapper = shallow(<SearchGif />);
    expect(wrapper).toMatchSnapshot();
  });
});
