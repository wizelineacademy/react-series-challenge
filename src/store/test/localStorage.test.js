import { loadState, saveState } from '../localStorage'

describe('LocalStorage', () => {
  test('should not load localStorage ', () => {
    expect(loadState()).toBe(undefined);
  });

  test('should not update state', () => {
    const initialState = undefined;
    saveState(initialState);
    expect(loadState()).toEqual(initialState);
  });
});