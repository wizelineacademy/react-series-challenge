import React from 'react';
import Message from '../../Message';

describe('<Message />', () => {
  it('Message must be rendered without crashing', () => {
    const wrapper = shallow(
      <Message>
        <p>Hello Test!</p>
      </Message>
    );
    expect(wrapper.is('div')).toBeTruthy();
    expect(wrapper.find('p')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
