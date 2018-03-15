import reducer from '../../src/reducers/search';
import actions from '../../src/actions/search';

describe('Search reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        currentTerm:'',
        isLoading: false,
        giphyArray:[],
        errorMessage: ''
      }
    );
  });

  it('test UPDATE TERM ', () => {
    expect(reducer(undefined, actions.creators.updateSearchTerm('hello'))).toEqual(
      {
        currentTerm:'hello',
        isLoading: false,
        giphyArray:[],
        errorMessage: ''
      }
    );
  });

  it('test SEARCH START ', () => {
    expect(reducer(undefined, actions.creators.searchStart('hello'))).toEqual(
      {
        currentTerm:'',
        isLoading: true,
        giphyArray:[],
        errorMessage: ''
      }
    );
  });

  it('test SEARCH SUCCESS ', () => {
    expect(reducer(undefined, actions.creators.searchSuccess('hello'))).toEqual(
      {
        currentTerm:'',
        isLoading: false,
        giphyArray: 'hello',
        errorMessage: ''
      }
    );
  });

  it('test SEARCH FAIL ', () => {
    expect(reducer(undefined, actions.creators.searchFail('hello'))).toEqual(
      {
        currentTerm:'',
        isLoading: false,
        giphyArray:[],
        errorMessage: 'hello'
      }
    );
  });
});