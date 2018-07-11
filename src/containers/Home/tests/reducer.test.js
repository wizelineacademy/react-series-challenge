import reducer from '../reducer';
import actions from '../actions';

describe('Home container reducer', () => {
  it('should set the state isLoading to true when sending as LOADING_SET, with true as payload', () => {
    const action = actions.creators.setLoading(true);
    const newState = reducer(undefined, action);
    expect(newState).toMatchSnapshot();
  });

  it('should set the state isLoading to false when sending as LOADING_SET, with false as payload', () => {
    const action = actions.creators.setLoading(false);
    const newState = reducer(undefined, action);
    expect(newState).toMatchSnapshot();
  });

  it('should set the state gifs when sending as GIFS_SET, with an array of gifs as payload', () => {
    const gifs = [{ id: 'gif.1' }, { id: 'gif.2' }];
    const action = actions.creators.setGifs(gifs);
    const newState = reducer(undefined, action);
    expect(newState).toMatchSnapshot();
  });

  it('should set the state searchTerm  when sending as SEARCH_TERM_SET, with term as payload', () => {
    const action = actions.creators.setSearchTerm('dogo');
    const newState = reducer(undefined, action);
    expect(newState).toMatchSnapshot();
  });

  it('should return the initialState or prevState if action is not recognized', () => {
    const action = { TYPE: 'UNKWON.ACTION' };
    const newState = reducer(undefined, action);
    expect(newState).toMatchSnapshot();
  });
});
