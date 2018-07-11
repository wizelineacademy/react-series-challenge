import React from 'react';
import { shallow } from 'enzyme';
import { SearchBarHome } from '../../components/SearchBars/SearchBarHome';

describe('test', () => {
  it('will work', () => {
    const component = shallow(<SearchBarHome/>);
    expect(component).toMatchSnapshot();
  });
});
