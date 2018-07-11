import { fetchedGifsTrending, fetchedGifsSearch } from '../../actions/gifActions';

describe('Gifs actions', () => {
    test('Should request trending', () => {
        const gifs = fetchedGifsTrending();
        expect(gifs).toEqual({ type: 'GIFS_TRENDING_FETCHED' });
    });

    test('Should request search', () => {
        const gifs = fetchedGifsSearch('elmo');
        expect(gifs).toEqual({ type: 'GIFS_SEARCH_FETCHED', payload: 'elmo' });
    });
});