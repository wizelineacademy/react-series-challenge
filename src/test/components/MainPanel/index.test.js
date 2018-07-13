import React from 'react';
import { shallow, render, mount } from "enzyme";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import initialState from "../../../reducers/initialState";
import IndexComponent from "../../../components/MainPanel";

describe('ExplorePanel', () => {
  
  it('Index component should match snapshot', () => {
    let mockStore = {
      dispatch: jest.fn(),
      getState: jest.fn(),
      subscribe: jest.fn()
    }
    expect(shallow(<IndexComponent store={mockStore} />)).toMatchSnapshot();
  });

  it('Mount should dispatch action to get the users saved favorites', () => {
    let mockStore = {
      dispatch: jest.fn(),
      getState: jest.fn(() => ({
        ...initialState
      })),
      subscribe: jest.fn()
    }
    const comp = mount(
      <Router>
        <Provider store={mockStore} >
          <IndexComponent />
        </Provider>
      </Router>
    );
    expect(mockStore.dispatch).toHaveBeenCalled();
  });

})
