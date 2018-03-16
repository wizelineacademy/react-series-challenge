import '../localStorageMock';
import state from '../../store/state';

describe('Store\'s state', () => {
  it('gets state from localStorage', () => {
    const newState = { newState: true };
    state.save(newState);
    expect(state.load()).toEqual(newState);
  });

  it('gets empty state when loading from localStorage fails', () => {
    localStorage.getItem = '';
    expect(state.load()).toEqual({});
  });

  it('logs to console and gets empty state when loading from localStorage fails', () => {
    console.log = jest.fn();
    localStorage.getItem = '';
    expect(state.load()).toEqual({});
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  it('logs to console when saving localStorage fails', () => {
    console.log = jest.fn();
    localStorage.setItem = '';
    state.save({});
    expect(console.log).toHaveBeenCalledTimes(1);
  });
});
