import { createStore } from 'redux';
import rootReducer from './index';
const initialState = {
    favorites:{ 
        gifs:{},
        filter: ''
    },
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
    },
    menu:{
        show:false
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