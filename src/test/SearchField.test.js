import React from 'react';
import { shallow } from 'enzyme';
import SearchField from '../components/SearchField';
import { SearchFieldStyled } from '../components/SearchField/SearchField.styled';

describe('test SearchField Render', () => {
  it('render structure', () => {
    const component = shallow(<SearchField />);
    expect(component).toMatchSnapshot();
  });
});

describe('test SerchField onChange', () => {
  it('render structure', () =>{
    const component = shallow(<SearchField onChange={event=>{}} />);
    const child = component.find(SearchFieldStyled);
    child.simulate('change',{ target: { value: 'text' }});
  });
})