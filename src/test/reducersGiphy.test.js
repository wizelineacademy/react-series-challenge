import actions from '../actions/giphy';
import giphy from '../reducers/giphy';

const startState = {
    list: null,
    query: null,
    fetching: true,
    success: true
}
const completeState = {
    list: undefined,
    fetching: false,
    success: true
}
const errorState = {
    list: null,
    query: null,
    fetching: false,
    success: false
}

describe('test reducer', () => {
    it('Action get start trending', () => {
        expect(giphy({}, {
            type: actions.types.GET_TRENDING_START,
            payloads: []
        })).toEqual(startState);
    })
});

describe('test reducer', () => {
    it('Action get start search', () => {
        expect(giphy({}, {
            type: actions.types.GET_SEARCH_START,
            payloads: []
        })).toEqual(startState);
    })
});

describe('test reducer', () => {
    it('Action get trending complete', () => {
        expect(giphy({}, {
            type: actions.types.GET_TRENDING_COMPLETE,
            payloads: []
        })).toEqual(completeState);
    })
});

describe('test reducer', () => {
    it('Action get by id complete', () => {
        expect(giphy({}, {
            type: actions.types.GET_BY_ID_COMPLETE,
            payloads: []
        })).toEqual(completeState);
    })
});

describe('test reducer', () => {
    it('Action get trending error', () => {
        expect(giphy({}, {
            type: actions.types.GET_TRENDING_ERROR,
            payloads: []
        })).toEqual(errorState);
    })
});

describe('test reducer', () => {
    it('Action get search error', () => {
        expect(giphy({}, {
            type: actions.types.GET_SEARCH_ERROR,
            payloads: []
        })).toEqual(errorState);
    })
});

describe('test reducer', () => {
    it('Action get by id error', () => {
        expect(giphy({}, {
            type: actions.types.GET_BY_ID_ERROR,
            payloads: []
        })).toEqual(errorState);
    })
});