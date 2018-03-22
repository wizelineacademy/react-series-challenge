import reducer from '../reducer';
import * as actions from '../actions';

describe('Home - Reducer', () => {
  it('Must add searching prev state for the search', () => {
    const initialState = reducer(undefined, {});

    expect(reducer(
      initialState,
      actions.fetchTrendingGifs(),
    )).toMatchSnapshot();
  });


  it('Must remove searching state and return list of gifs', () => {
    const initialState = reducer(undefined, {});

    const gifs = {
      a: { id: 'a'},
      b: { id: 'b'},
      c: { id: 'c'},
    }

    expect(reducer(
      initialState,
      actions.fetchTrendingGifsSuccess(gifs),
    )).toMatchSnapshot();
  });

  it('Must add error state for the search', () => {
    const initialState = reducer(undefined, {});

    const errorMessage = 'Error';

    expect(reducer(
      initialState,
      actions.fetchTrendingGifsError(errorMessage),
    )).toMatchSnapshot();
  });

  it('Must add searching prev state for free text searching', () => {
    const initialState = reducer(undefined, {});

    const text = "cats";

    expect(reducer(
      initialState,
      actions.searchGifs(text),
    )).toMatchSnapshot();
  });


  it('Must remove searching state and return list of free text searching', () => {
    const initialState = reducer(undefined, {});

    const gifs = {
      a: { id: 'a'},
      b: { id: 'b'},
      c: { id: 'c'},
    }

    expect(reducer(
      initialState,
      actions.searchGifsSuccess(gifs),
    )).toMatchSnapshot();
  });

  it('Must add error state for the free text searching', () => {
    const initialState = reducer(undefined, {});

    const errorMessage = 'Error';

    expect(reducer(
      initialState,
      actions.searchGifsError(errorMessage),
    )).toMatchSnapshot();
  });
});
