import React from 'react';
import { MemoryRouter } from 'react-router';
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
