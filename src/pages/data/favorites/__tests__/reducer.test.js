import reducer from '../reducer';
import * as actions from '../actions';

describe('Favorites - Reducer', () => {
  it('Must add an element to the favorites list', () => {
    const initialState = reducer(undefined, {});
    const gifToBeAdded = { id: 'a'};

    expect(reducer(
      initialState,
      actions.toggleFavorite(gifToBeAdded),
    )).toMatchSnapshot();
  });
  it('Must remove an existent element from the favorites list', () => {
    const initialState = reducer(undefined, {
      list: {
        a: { id: 'a'}
      }
    });

    const gitToBeRemoved = { id: 'a'};

    expect(reducer(
      initialState,
      actions.toggleFavorite(gitToBeRemoved),
    )).toMatchSnapshot();
  });
});
