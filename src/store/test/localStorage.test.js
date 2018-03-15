import { loadState, saveState } from '../localStorage'

 describe('localStorage', () => {
  it('will return undefined', () => {
    expect(loadState()).toBe(undefined)
  })

  it('wont serialize', () => {
    saveState(() => {})
    expect(loadState()).toEqual(undefined)
  })

  it('will saveState', () => {
    const state = {item: "test" }
    saveState(state)
    expect(loadState()).toEqual(state)
  });
});
