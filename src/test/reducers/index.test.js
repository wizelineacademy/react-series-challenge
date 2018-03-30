import { createStore } from 'redux';
import combineReducers from '../../reducers/index';
import search from '../../reducers/search';
import trending from '../../reducers/trending';

describe('Combine reducers', () => {
  let store = createStore(combineReducers);

  it('Check initial state mathches children when empty action', () => {
    expect(store.getState().search).toEqual(search(undefined, {}));
    expect(store.getState().trending).toEqual(trending(undefined, {}));
  });
});
