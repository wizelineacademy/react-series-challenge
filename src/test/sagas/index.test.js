import { all, call, put, takeEvery } from 'redux-saga/effects'
import rootSaga, {
    fetchApi,
    getSearchedGifs,
    getTrendingGifs,
    watchGetTrendingGifs,
    watchSearchGifs
} from '../../sagas';
import gifListActions from '../../actions/gifList';
import searchBarActions from '../../actions/searchBar';


const { GET_TRENDING_GIFS } = gifListActions.types;
const { fetchedTrendingGifs } = gifListActions.creators;

const { SEARCH_BAR_INPUT } = searchBarActions.types;

const trendingResource = '/trending?limit=25&rating=G';
const searchedResource = `/search?q=test&limit=25&offset=0&rating=G&lang=en`;

describe('sagas tests', () => {
    const generatorGetTrendingGifs = getTrendingGifs();
    const generatorGetSearchedGifs = getSearchedGifs({ payload: 'test' });
    const generatorWatchGetTrendingGifs = watchGetTrendingGifs();
    const generatorWatchSearchGifs = watchSearchGifs();
    const generatorRootSaga = rootSaga();

    test('should call "fetchApi" function to get trending gifs', () => {
        const firstYield = generatorGetTrendingGifs.next().value;
        expect(firstYield).toEqual(call(fetchApi, trendingResource));
    });

    test('should "put" the "fetchedTrendingGifs" action with the trending results', () => {
        const secondYield = generatorGetTrendingGifs.next([]).value;
        expect(secondYield).toEqual(put(fetchedTrendingGifs()));
    });

    test('should call "fetchApi" function to get searched gifs', () => {
        const firstYield = generatorGetSearchedGifs.next().value;
        expect(firstYield).toEqual(call(fetchApi, searchedResource));
    });

    test('should "put" the "fetchedTrendingGifs" action with the search results', () => {
        const secondYield = generatorGetSearchedGifs.next([]).value;
        expect(secondYield).toEqual(put(fetchedTrendingGifs()));
    });

    test('should "takeEvery" action with the type "GET_TRENDING_GIFS" ', () => {
        const testValue = generatorWatchGetTrendingGifs.next().value;
        expect(testValue).toEqual(takeEvery(GET_TRENDING_GIFS, getTrendingGifs));
    });

    test('should "takeEvery" action with the type "SEARCH_BAR_INPUT" ', () => {
        const testValue = generatorWatchSearchGifs.next().value;
        expect(testValue).toEqual(takeEvery(SEARCH_BAR_INPUT, getSearchedGifs));
    });

    test('simple "rootSaga" test', () => {
        const testValue = generatorRootSaga.next().value;
        expect(testValue).toEqual(all([
            watchGetTrendingGifs(),
            watchSearchGifs(),
        ]));
    });

});
