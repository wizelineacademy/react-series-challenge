/*import React from 'react';
import { shallow } from 'enzyme';
import Search from '../components/Search/Search';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

describe('<Search />', () => {
  let wrapper, store;

  beforeEach(() => {
    const initialState = {
      queryStr: '',
      searchFetching: false,
    };
    store = mockStore(initialState);
    wrapper = shallow(
      <Search store={store} />
    );
  });

  it('Should initialize searchFetching with false', () =>{
      expect(store.searchFetching).toBe("false");
  });

  it('render the form', () => {
    expect(wrapper.find('#searchForm').toEqual(1));
  });

  it('submits the form', ()=> {
    wrapper.simulate('submit');
   const actions = store.getActions();
   expect(actions).toEqual([ {type: 'GET_SEARCH_REQUESTED'}]);
  })

//  it('should updates the state with search string', () = {

  //})
})*/
