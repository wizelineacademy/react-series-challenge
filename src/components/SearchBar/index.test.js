import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './index';
import { SearchBar as SearchBarComponent } from './index';
import store from '../../store';

const mockFunction = jest.fn();

describe('test SearchBar Render', () => {
  it('should render structure', () => {
    const renderedComponent = shallow(<SearchBar store={store} />);
    expect(renderedComponent).toMatchSnapshot();
  });
  it('should render Component with mock function', () => {
    const renderedComponent = shallow(
      <SearchBarComponent changeInput={mockFunction} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
