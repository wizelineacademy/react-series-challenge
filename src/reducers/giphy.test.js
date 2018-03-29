/*import giphy from '../actions/giphy';

const initialState = {
    gif: {},
    fetching: false
};

const giphyReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case giphy.types.GIPHY_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case giphy.types.GIPHY_COMPLETED:
      var gif = {...action.gif}
      return {
        ...state,
        fetching: false,
        gif: {...gif},
      };
    case giphy.types.GIPHY_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.error,
      }
    default:
      return state;
  }
};

export default giphyReducer;*/
import * as giphy from './giphy';
import * as giphyActions from '../actions/giphy';
let creators = giphyActions.default.creators;
let giphyReducer = giphy.default;
let data = {a: 1, b: 2, gif:{}}

let gif = {id: 55};
let id = 55;
let error = {message: 'invalid api key'}
const initialState = {
    gif: {},
    fetching: false
};
describe('Giphy Reducer', () => {
    it('No action', ()=>{
      expect(giphyReducer(data, {type: 'no-action'})).toEqual(data);
    });
    it ("initial state", ()=>{
      expect(giphyReducer(undefined, {type: 'no-action'})).toEqual(initialState);  
    })
    it('Start Fetching', ()=>{
        var result = {
            ...data,
            fetching: true
        }
        expect(giphyReducer(data, creators.giphyRequest(id))).toEqual(result);
    })
    it('Fetching Error', ()=>{
        var result = {
            ...data,
            fetching: false,
            error: error
        }
        expect(giphyReducer(data, creators.giphyFailed(error))).toEqual(result);
    })
    it('Fetching Complete', ()=>{
        var result = {
            ...data,
            fetching: false,
            gif: gif
        }
        expect(giphyReducer(data, creators.giphyCompleted(gif))).toEqual(result);
    });
});