import React from 'react';
import configureStore from 'redux-mock-store';

import { shallow } from 'enzyme';


import ConnectedApp from '../../components/App';

describe('App component', () => {
  test('should shallow correctly', () => {
    const mockStore = configureStore();

    const store = mockStore({});
    const container = shallow(<ConnectedApp store={store} />);

    expect(container).toMatchSnapshot();
  });
});
