import React from 'react';
import { mount } from 'enzyme';
import { SearchBarHome } from '../../components/SearchBars/SearchBarHome';

describe('test', () => {
  it('will work', () => {
    const getfn=jest.fn();
    const component = mount(<SearchBarHome
      getGift={getfn}/>);

    component.find('input').simulate('change');

    expect(component).toMatchSnapshot();
  });
});
