import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom'
import SearchInput from '../../components/SearchInput'
// import sinon from 'sinon'

describe('Search Input', () => {
  it('writes and dispatch event on enter key', () => {
    const wrapper = mount(
      <BrowserRouter>
        <SearchInput/>
      </BrowserRouter>
    );

    wrapper.find('input').simulate('change', {target: {value: 'David'}})
    wrapper.update()
    wrapper.find('input').simulate('keypress', { key: 'Enter' })
    wrapper.update()
  });

  it('coverage for other inputs', () => {
    const wrapper = mount(
      <BrowserRouter>
        <SearchInput/>
      </BrowserRouter>
    );

    wrapper.find('input').simulate('keypress', { key: 'a' })
    wrapper.update()
  });

});

