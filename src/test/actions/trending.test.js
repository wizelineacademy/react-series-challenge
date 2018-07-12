import trending from '../../actions/trending'

const {
    types: {
        TRENDING_GET,
        TRENDING_FETCHED,
        TRENDING_FAILED
    },
    creators: {
        getTrending,
        fetchedTrending,
        failedTrending
    }
} = trending


describe('Trending Actions, Types and Creators', () => {

    test('Should return a search get action', () => {
        expect(getTrending()).toMatchObject({ type: TRENDING_GET });
    })

    test('Should return a search failed action', () => {
        expect(fetchedTrending([{ id: 1 }, { id: 2 }])).toMatchObject({ type: TRENDING_FETCHED, payload: [{ id: 1 }, { id: 2 }] });
    })

    test('Should return a search failed action', () => {
        expect(failedTrending('Timeout')).toMatchObject({ type: TRENDING_FAILED, payload: 'Timeout' });
    })

})