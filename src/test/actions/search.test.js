import search from '../../actions/search'

const {
    types: {
        SEARCH_GET,
        SEARCH_FETCHED,
        SEARCH_FAILED
    },
    creators: {
        getSearch,
        fetchedSearch,
        failedSearch
    }
} = search

describe('Search Actions, Types and Creators', () => {

    test('Should return a search get action', () => {
        expect(getSearch('BMO')).toMatchObject({ type: SEARCH_GET, payload: 'BMO' });
    })

    test('Should return a search failed action', () => {
        expect(failedSearch('Timeout error')).toMatchObject({ type: SEARCH_FAILED, payload: 'Timeout error' });
    })

    test('Should return a search failed action', () => {
        expect(fetchedSearch([{ id: 1 }])).toMatchObject({ type: SEARCH_FETCHED, payload: [{ id: 1 }] });
    })

})