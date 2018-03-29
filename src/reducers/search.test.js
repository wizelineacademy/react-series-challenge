
import * as search from './search';
import * as searchActions from '../actions/search';
let creators = searchActions.default.creators;
let searchReducer = search.default;
let data = {a: 1, b: 2}
let gif = {id: 55};
let q = 'anime';
let error = {message: 'invalid api key'}
const initialState = {
    q: '',
    gifs: [],
    isLoading: false
  }

describe('Search Reducers', () => {
  it('No action', ()=>{
    expect(searchReducer(data, {type: 'no-action'})).toEqual(data);
  });
  it ("initial state", ()=>{
    expect(searchReducer(undefined, {type: 'no-action'})).toEqual(initialState);  
  })
  it('Start Fetching', ()=>{
    var result = {
        ...data,
        q: q,
        fetching: true
    }
    expect(searchReducer(data, creators.search(q))).toEqual(result);
  })
  it('Fetching Error', ()=>{
    var result = {
        ...data,
        fetching: false,
        error: error
    }
    expect(searchReducer(data, creators.searchFailed(error))).toEqual(result);
  })
  it('Fetching Complete', ()=>{
    var result = {
        ...data,
        fetching: false,
        gifs: [gif, gif]
    }
    expect(searchReducer(data, creators.searchCompleted([gif, gif]))).toEqual(result);
  });
});