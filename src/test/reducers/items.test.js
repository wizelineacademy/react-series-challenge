import items from '../../reducers/items';
import {
  getItemsSuccess,
  getItemsError
} from '../../actions';

let state;

describe('Reducer: items', () => {
  beforeEach(() => {
    state = {
      list: {
        gif7: { title: 'five' }
      }
    };
  });

  it('returns default status', () => {
    const reduced = items(undefined, { type: 'none' });
    expect(reduced).toEqual({ list: {} });
  })

  it('gets items after successful api request', () => {
    const action = getItemsSuccess({ items: [{ id: 'newGif' }] });
    const reduced = items(state, action);
    expect(reduced.list.newGif).toBeDefined();
    expect(reduced.error).toBeFalsy();
  });

  it('gets error after failed api request', () => {
    const action = getItemsError();
    const reduced = items(state, action);
    expect(reduced.error).toBeTruthy();
  });
});
