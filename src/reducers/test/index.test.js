import rootReducer from '../index'
import {createStore} from "redux";
import SearchReducer from "../searchValues";

describe('Index Reducer', () => {
  let store = createStore(rootReducer);

  test('should check initial values', function () {
    expect(store.getState().SearchReducer).toEqual(SearchReducer(undefined, {payload: {}}));
  });
});