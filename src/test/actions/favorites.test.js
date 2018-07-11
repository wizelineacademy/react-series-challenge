import favorites from '../../actions/favorites'

const {
    types: {
        FAVORITE_ADD,
        FAVORITE_REMOVE,
        FAVORITES_GET,
        FAVORITES_FETCHED,
        FAVORITES_FAILED,
        FAVORITE_SEARCH,
        FAVORITE_SEARCHED
    },
    creators: {
        addFavorite,
        removeFavorite,
        getFavorites,
        fetchedFavorites,
        failedFavorites,
        searchFavorite,
        searchedFavorite
    }
} = favorites

describe('Favorites Actions, Types and Creators', () => {

    describe('Creators', () => {

        test('Shoud return an Add favorite action', () => {
            expect(addFavorite({ id: 1 })).toMatchObject({ type: FAVORITE_ADD, payload: { id: 1 } })
        })

        test('Shoud return an Remove favorite action', () => {
            expect(removeFavorite({ id: 1 })).toMatchObject({ type: FAVORITE_REMOVE, payload: { id: 1 } })
        })


        test('Shoud return an Get favorites action', () => {
            expect(getFavorites()).toMatchObject({ type: FAVORITES_GET })
        })


        test('Shoud return an Fetched favorites action', () => {
            expect(fetchedFavorites([{ id: 1 }])).toMatchObject({ type: FAVORITES_FETCHED, payload: [{ id: 1 }] })
        })


        test('Shoud return an Remove favorite action', () => {
            expect(searchFavorite()).toMatchObject({ type: FAVORITE_SEARCH })
        })


        test('Shoud return an Remove favorite action', () => {
            expect(searchedFavorite([{ id: 1 }])).toMatchObject({ type: FAVORITE_SEARCHED, payload: [{ id: 1 }] })
        })

        test('Shoud return an Remove favorite action', () => {
            expect(failedFavorites('Request take to long')).toMatchObject({ type: FAVORITES_FAILED, payload: 'Request take to long' })
        })

    })
})