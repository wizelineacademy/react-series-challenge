import search from '../../reducers/search'
import actions from '../../actions/search'

const {
    types: {
        SEARCH_FETCHED
    }
} = actions

describe('Search Reducer', () => {

    test('Should return an array of results', () => {
        expect(search([], { type: SEARCH_FETCHED, payload: [{ id: 1 }] })).toMatchObject([{ id: 1 }])
        expect(search([], { type: SEARCH_FETCHED, payload: [{ id: 1 }] })).toHaveLength(1)
    })

    test('Should the same state is action is empty', () => {
        expect(search([{ id: 1 }], { })).toMatchObject([{ id: 1 }])
    })

})