import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

describe('<Store />', () => {
  test('renders data correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Routes />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
