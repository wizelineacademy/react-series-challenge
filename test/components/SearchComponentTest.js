import React from 'react';
import { SearchComponent , mapStateToProps , mapDispatchToProps } from '../../src/components/SearchComponent';
import { shallow, mount } from 'enzyme';
import MockRouter from 'react-mock-router';

// import sinon from 'sinon';

describe('SearchComponent --',() => {

  test('SearchComponent mounts ', () => {
    const props = {
      updateSearchTerm: jest.fn(),
      search:{currentTerm: ''}
    }
    const wrapper = shallow(<SearchComponent {...props} />);
    const inst = wrapper.instance()
    expect(inst).toBeInstanceOf(SearchComponent);
  });

  test('SearchComponent onchange test ', () => {
    const props = {
      updateSearchTerm: jest.fn(),
      search:{currentTerm: ''}
    }
    const wrapper = mount(<MockRouter><SearchComponent {...props} /></MockRouter>);
    wrapper.find('input').simulate('change',{ target:{ value: 'searchme' }});
    expect(props.updateSearchTerm.mock.calls.length).toBe(1);
    expect(props.updateSearchTerm.mock.calls[0][0]).toBe('searchme');

  });

  test('SearchComponent mapStateToProps', () => {
    const mockState = {
      search: 'search', 
      unknown: 'test'
    };
    let props = mapStateToProps(mockState);
    expect(props.search).toBeTruthy();
    expect(props.unknown).toBeFalsy();
    expect(Object.keys(props)).toHaveLength(1);

  });

  test('SearchComponent  mapDispatchToProps ', () => {
    const mockDispatch = jest.fn();
    let props = mapDispatchToProps(mockDispatch);
    expect(props.searchRequest).toBeTruthy();
    expect(props.updateSearchTerm).toBeTruthy();
    expect(Object.keys(props)).toHaveLength(2);
  });

})