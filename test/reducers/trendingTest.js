import reducer from '../../src/reducers/trending';
import actions from '../../src/actions/trending';

describe('Trending reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isLoading: false,
        giphyArray:[],
        errorMessage: ''
      }
    );
  });


  it('test TRENDING START ', () => {
    expect(reducer(undefined, actions.creators.trendingStart('hello'))).toEqual(
      {
        isLoading: true,
        giphyArray:[],
        errorMessage: ''
      }
    );
  });

  it('test TRENDING SUCCESS ', () => {
    expect(reducer(undefined, actions.creators.trendingSuccess('hello'))).toEqual(
      {
        isLoading: false,
        giphyArray: 'hello',
        errorMessage: ''
      }
    );
  });

  it('test TRENDING FAIL ', () => {
    expect(reducer(undefined, actions.creators.trendingFail('hello'))).toEqual(
      {
        isLoading: false,
        giphyArray:[],
        errorMessage: 'hello'
      }
    );
  });
});