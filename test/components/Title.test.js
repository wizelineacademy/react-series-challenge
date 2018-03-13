import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Title from '../../src/components/Title';

const SEARCH_TERM = 'some_term';

describe('Title', () => {
  let props, initialState, mockStore;
  beforeEach(() => {
    initialState = {
      giphyReducer: {
        searchTerm: SEARCH_TERM
      }
    }; 
    mockStore = configureStore();
    props = {};
  });

  it('should render correctly', () => {
    props.store = mockStore(initialState);
    const tree = renderer
    .create(
      <Title {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();  
  });

  it('should render correctly if sent children', () => {
    props.store = mockStore(initialState);
    props.children = shallow(<p>HELLO</p>)
    const tree = renderer
    .create(
      <Title {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();  
  });
  
});