import * as trending from './trending';
import * as trendingActions from '../actions/trending';
let creators = trendingActions.default.creators;
let trendingReducer = trending.default;
let data = {a: 1, b: 2}

let gif = {id: 55}
let error = {message: 'invalid api key'}
const initialState = {
    gifs: [],
    fetching: false
};

describe('Trending Reducers', () => {
  it('No action', ()=>{
    expect(trendingReducer(data, {type: 'no-action'})).toEqual(data);
  });
  it ("initial state", ()=>{
    expect(trendingReducer(undefined, {type: 'no-action'})).toEqual(initialState);  
  })
  it('Start Fetching', ()=>{
    var result = {
        ...data,
        fetching: true
    }
    expect(trendingReducer(data, creators.getTrendingRequested())).toEqual(result);
  })
  it('Fetching Error', ()=>{
    var result = {
        ...data,
        fetching: false,
        error: error
    }
    expect(trendingReducer(data, creators.getTrendingFailed(error))).toEqual(result);
  })
  it('Fetching Complete', ()=>{
    var result = {
        ...data,
        fetching: false,
        gifs: [gif, gif]
    }
    expect(trendingReducer(data, creators.getTrendingCompleted([gif, gif]))).toEqual(result);
  });
});