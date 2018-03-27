import { createStore } from 'redux';
import rootReducer from './index';
const initialState = {
    favorites:{ gifs:{}},
    giphy:{
        fetching: false,
        gif: {}
    },
    search:
    {
        q:'',
        isLoading: false,
        gifs: []
    },
    trending:
    {
        fetching: false,
        gifs:[]
    }

};
const store = createStore (
    rootReducer
);
describe('Combine Reducer', () => {
    it('Get Inital State', ()=>{
      expect(store.getState()).toEqual(initialState);
    });
});