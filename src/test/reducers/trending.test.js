import trending from '../../reducers/trending'
import actions from '../../actions/trending'

const {
    types: {
        TRENDING_FAILED,
        TRENDING_FETCHED
    }
} = actions

describe('Trending Reducer', () => {

    test('Should return an array of results', () => {
        expect(trending(
            [], { type: TRENDING_FETCHED, payload: [{ id: 1 }] }
        )).toMatchObject([{ id: 1 }])

        expect(trending(
            [], { type: TRENDING_FETCHED, payload: [{ id: 1 }] }
        )).toHaveLength(1)
    })

    test('Should return the initial state', () => {
        expect(trending(
            [ { id: 1 } ],
            { type: TRENDING_FAILED }
        )).toMatchObject([{ id: 1 }])

        expect(trending(
            [ { id: 1 } ],
            {}
        )).toMatchObject([{ id: 1 }])

    })


})