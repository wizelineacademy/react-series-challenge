import React from 'react';
import { shallow } from 'enzyme';
import Modal, { Portal } from '../../components/Modal';

describe('<Modal />', () => {
  it('should render correctly', () => {
    const execute = () => {
      shallow(<Modal />);
    };
    expect(execute).not.toThrow();
    expect()
  });
});

describe('<Portal />', () => {
  it('should render correctly', () => {
    const execute = () => {
      shallow(<Portal />);
    };
    expect(execute).not.toThrow();
  });
});
