import favoritesActions from '../actions/favorites';
import favorites from '../reducers/favorites';

describe('test reducer', ()=>{
    it('Action get start', () => {
        expect(favorites({}, {
            type: favoritesActions.types.GET_FAVORITE_START,
            payloads: []
        })).toEqual({
            list: null,
            originalList: null,
            filterList: null,
            fetching: true,
            success: true
        });
    })
});

describe('test reducer', ()=>{
    it('Action add start', () => {
        expect(favorites({}, {
            type: favoritesActions.types.ADD_FAVORITE_START,
            payloads: []
        })).toEqual({
            list: null,
            originalList: null,
            filterList: null,
            fetching: true,
            success: true
        });
    })
});

describe('test reducer', ()=>{
    it('Action remove start', () => {
        expect(favorites({}, {
            type: favoritesActions.types.REMOVE_FAVORITE_START,
            payloads: []
        })).toEqual({
            list: null,
            originalList: null,
            filterList: null,
            fetching: true,
            success: true
        });
    })
});

describe('test reducer', ()=>{
    it('Action get start', () => {
        expect(favorites({}, {
            type: favoritesActions.types.GET_FAVORITE_ERROR,
            payloads: []
        })).toEqual({
            list: null,
            originalList: null,
            filterList: null,
            fetching: false,
            success: false
        });
    })
});

describe('test reducer', ()=>{
    it('Action add start', () => {
        expect(favorites({}, {
            type: favoritesActions.types.ADD_FAVORITE_ERROR,
            payloads: []
        })).toEqual({
            list: null,
            originalList: null,
            filterList: null,
            fetching: false,
            success: false
        });
    })
});

describe('test reducer', ()=>{
    it('Action remove start', () => {
        expect(favorites({}, {
            type: favoritesActions.types.REMOVE_FAVORITE_ERROR,
            payloads: []
        })).toEqual({
            list: null,
            originalList: null,
            filterList: null,
            fetching: false,
            success: false
        });
    })
});