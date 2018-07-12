import SearchReducer from '../searchValues';
import SearchActions from '../../actions/searchValues';

describe('Search Reducer', () => {

    const initialState  = {
        "favoritedImages": [], 
        "gifs": [], 
        "searchedValue": "trendy"
    }

    const exampleState = {
        "favoritedImages": [{
            id: "3olOPrhv7ngSHROxOk",
            isFavorite: true,
            searchedValue: "trendy",
            url: "https://media3.giphy.com/media/3olOPrhv7ngSHROxOk/giphy-downsized.gif"
        }], 
        "gifs": [{
            id: "3olOPrhv7ngSHROxOk",
            isFavorite: true,
            images: {
                downsized: {
                    url: "http://image"
                }
            }
        }], 
        "searchedValue": "trendy"
    }

    const receptionAddRemove = {
        "favoritedImages": [], 
        "gifs": [{
            "id": "3olOPrhv7ngSHROxOk", 
            "images": 
            {
                "downsized": 
                {
                    "url": "http://image"
                }
            }, 
            "isFavorite": false
            }
        ], 
        "searchedValue": "trendy"}

    const receptionTrend = {"favoritedImages": [{
        "id": "3olOPrhv7ngSHROxOk", 
        "isFavorite": true, 
        "searchedValue": "trendy", 
        "url": "https://media3.giphy.com/media/3olOPrhv7ngSHROxOk/giphy-downsized.gif"
    }], 
    "gifs": [{
        "id": "3olOPrhv7ngSHROxOk", 
        "images": {"downsized": {"url": "https//"}}, 
        "isFavorite": true, 
        "searchedValue": "trendy", 
        "url": "https://media3.giphy.com/media/3olOPrhv7ngSHROxOk/giphy-downsized.gif"}], 
        "searchedValue": "trendy"}

    const payload = {
        data: {
            data: [{
                id: "3olOPrhv7ngSHROxOk",
                isFavorite: true,
                searchedValue: "trendy",
                url: "https://media3.giphy.com/media/3olOPrhv7ngSHROxOk/giphy-downsized.gif",
                images: {
                    downsized: {
                        url: "https//"
                    }
                }
            }]
        }
    }

    const payloadAddRemove = {
        id: "3olOPrhv7ngSHROxOk",
        searchedValue: "trendy",
        url: "https://media2.giphy.com/media/3o6wrCGevaM9E0Jlo4/giphy-downsized.gif"
    }

    const payloadSearchValue = {
        searchValue: "trendy"
    }

    test('should return the initial setted state', () => {
        expect(SearchReducer(undefined, {})).toEqual(initialState);
    });

    test('should handle ADD_REMOVE_GIF', () => {
        const startAction = {type: SearchActions.types.ADD_REMOVE_GIF, payload: payloadAddRemove }
        expect(SearchReducer(exampleState, startAction)).toEqual(receptionAddRemove);
    });

    test('should handle GET_TRENDING', () => {
        const startAction = {type: SearchActions.types.GET_TRENDING, payload: payload };
        expect(SearchReducer(exampleState, startAction)).toEqual(receptionTrend);
    });

    test('should handle REQUEST_API_DATA', () => {
        const startAction = {type: SearchActions.types.REQUEST_API_DATA, payload: payload };
        expect(SearchReducer(exampleState, startAction)).toEqual(exampleState);
    });

    test('should handle REQUEST_API_DATA_SEARCHED', () => {
        const startAction = {type: SearchActions.types.REQUEST_API_DATA_SEARCHED, payload: payload };
        expect(SearchReducer(exampleState, startAction)).toEqual(exampleState);
    });

    test('should handle SEARCH_SPECIFIED_GIFS', () => {
        const startAction = {type: SearchActions.types.SEARCH_SPECIFIED_GIFS, payload: payload };
        expect(SearchReducer(exampleState, startAction)).toEqual(receptionTrend);
    });

    test('should handle SEARCH_UPDATE_VALUE', () => {
        const startAction = {type: SearchActions.types.SEARCH_UPDATE_VALUE, payload: payloadSearchValue };
        expect(SearchReducer(exampleState, startAction)).toEqual(exampleState);
    });
});