import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';
import AppWrapper from '../../src/AppWrapper';

describe('<App />', () => {
  const renderComponent = () => (
    <AppWrapper>
      <App />
    </AppWrapper>
  );

  it('should render correctly', () => {
    const execute = () => {
      shallow(renderComponent());
    };
    expect(execute).not.toThrow();

    const wrapper = shallow(renderComponent());
    expect(wrapper.exists()).toBeTruthy();
  });
});
