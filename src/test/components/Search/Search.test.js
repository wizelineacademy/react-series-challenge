import React from 'react';
import { shallow } from 'enzyme';
import { Search } from '../../../components/Search/Search';

describe('Search component', () => {
  let wrapper;
  const mockSearchfn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Search search={mockSearchfn} />)
  });

  it('render the form', () => {
    expect(wrapper.exists(<form className='search'></form>)).toBe(true)
  });

//  it('submits the form', ()=> {
//    wrapper.find('#searchButton').simulate('submit', {preventDefault() {}});
//   const actions = store.getActions();
//   expect(actions).toEqual([ {type: 'GET_SEARCH_REQUESTED'}]);
//    expect(mockSearchfn.mock.calls.length).toBe(1)
//  })

//  it('should updates the state with search string', () = {

  //})
})
