import React from 'react';
import { shallow } from 'enzyme';
import { SearchBarFavorites } from '../../components/SearchBars/SearchBarFavorites';

describe('test', () => {
  it('will work', () => {
    const component = shallow(<SearchBarFavorites />);
    expect(component).toMatchSnapshot();
  });
});
