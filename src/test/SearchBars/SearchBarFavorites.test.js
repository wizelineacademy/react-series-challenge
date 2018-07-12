import React from 'react';
import { mount } from 'enzyme';
import { SearchBarFavorites } from '../../components/SearchBars/SearchBarFavorites';

describe('test', () => {
  it('will work', () => {
    const searchingfn = jest.fn();
    const component = mount(<SearchBarFavorites 
                                    favorites={{"cdcds":{"name":"cdccd"}}}
                                    isSearchingFavorite={searchingfn}
                                    value={""}/>);
    component.find('input').simulate('change');
    
    expect(component).toMatchSnapshot();
  });
});
