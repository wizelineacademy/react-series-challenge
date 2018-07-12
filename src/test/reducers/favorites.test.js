import favorites from '../../reducers/favorites'
import actions from '../../actions/favorites'

const {
    types: {
        FAVORITES_FETCHED,
        FAVORITE_ADD,
        FAVORITE_SEARCHED,
        FAVORITE_REMOVE
    }
} = actions

describe('Favorites Reducer', () => {

    test('Should return items an a without filter', () => {
        expect(favorites({}, { type: FAVORITES_FETCHED, payload: [{ id: 1 }] })).toMatchObject({ items: [{ id: 1 }] })
    })

    test('Should add a liked object', () => {
        expect(favorites(
            { items: [] },
            {
                type: FAVORITE_ADD,
                payload: { id: 1, favorite: true }
            }
        ))
    })

    test('Should return the initial state or same state when action is no defined',() => {
        expect(favorites(
            { items: [{ id: 1 }] },
            {}
        )).toMatchObject({ items: [{ id: 1 }] })
    })

    test('Should return a filter', () => {
        expect(favorites(
            {}, {
                type: FAVORITE_SEARCHED,
                payload: 'BMO'
            }
        )).toMatchObject({ filter: 'BMO' })
    })

    test('Should remove a element', () => {
        expect(favorites(
            { items: [{ id: 1 }, { id: 2 }] },
            {
                type: FAVORITE_REMOVE,
                payload: { id: 1 }
            }
        )).toMatchObject({ items: [{ id: 2}] })
    })

})