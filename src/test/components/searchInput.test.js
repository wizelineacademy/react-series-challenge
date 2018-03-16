import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom'
import SearchInput from '../../components/SearchInput'

describe('Search Input', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(
      <BrowserRouter>
        <SearchInput />
      </BrowserRouter>
    );
  })

  it('writes and dispatch event on enter key', () => {
    // wrapper.find('input').prop('onFocus')()
    wrapper.find('input').simulate('change', {target: {value: 'David'}})
    wrapper.update()
    wrapper.find('input').simulate('keypress', { key: 'Enter' })
    wrapper.update()
  });

});

