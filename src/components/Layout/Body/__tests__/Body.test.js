import React from 'react';
import { shallow } from 'enzyme';
import Body from '../../Body';

describe('<Body />', () => {
  it('Body must be rendered without crashing', () => {
    const wrapper = shallow(
      <Body>
        Content
      </Body>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
