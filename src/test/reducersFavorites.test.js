import favoritesActions from '../actions/favorites';
import favorites from '../reducers/favorites';

const startData = {
    list: null,
    originalList: null,
    filterList: null,
    fetching: true,
    success: true
};

const errorData = {
    list: null,
    originalList: null,
    filterList: null,
    fetching: false,
    success: false
};

const completeData = {
    fetching: false,
    list: {
        data: { data: [] }
    },
    originalList: {
        data: { data: [] }
    },
    success: true
}

const filterComplete = {
    fetching: false,
    list: {
        data: []
    },
    query: "red",
    success: true
}

describe('test reducer', () => {
    it('Action get start', () => {
        expect(favorites({}, {
            type: favoritesActions.types.GET_FAVORITE_START,
        })).toEqual(startData);
    })
});

describe('test reducer', () => {
    it('Action get start', () => {
        expect(favorites({}, {
            type: favoritesActions.types.FILTER_FAVORITE_START,
        })).toEqual({ fetching: true, success: true });
    })
});

describe('test reducer', () => {
    it('Action add start', () => {
        expect(favorites({}, {
            type: favoritesActions.types.ADD_FAVORITE_START,
        })).toEqual(startData);
    })
});

describe('test reducer', () => {
    it('Action remove start', () => {
        expect(favorites({}, {
            type: favoritesActions.types.REMOVE_FAVORITE_START,
        })).toEqual(startData);
    })
});

describe('test reducer', () => {
    it('Action get start', () => {
        expect(favorites({}, {
            type: favoritesActions.types.GET_FAVORITE_ERROR,
        })).toEqual(errorData);
    })
});

describe('test reducer', () => {
    it('Action add start', () => {
        expect(favorites({}, {
            type: favoritesActions.types.ADD_FAVORITE_ERROR,
        })).toEqual(errorData);
    })
});

describe('test reducer', () => {
    it('Action get complete', () => {
        expect(favorites({}, {
            type: favoritesActions.types.GET_FAVORITE_COMPLETE,
            payload: {
                data: []
            }
        })).toEqual(completeData);
    })
});

describe('test reducer', () => {
    it('Action get filter complete', () => {
        expect(favorites({}, {
            type: favoritesActions.types.FILTER_FAVORITE_COMPLETE,
            payload: {
                data: [],
                query: 'red'
            }
        })).toEqual(filterComplete);
    })
});