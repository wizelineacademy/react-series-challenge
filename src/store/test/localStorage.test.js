import { loadState, saveState } from '../localStorage'

describe('localStorage', () => {
  it('will return undefined', () => {
    expect(loadState()).toBe(undefined);
  });

  it('will return undefined cause serialization issue', () => {
    saveState(() => {});
    expect(loadState()).toEqual(undefined);
  });

  it('will save the state', () => {
    const newState = {gif: "dog"};
    saveState(newState);
    expect(loadState()).toEqual(newState);
  });
});
