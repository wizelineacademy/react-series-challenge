// import axios from 'axios';
import { fetchGifsTrending, fetchGifsSearch, } from '../../Api/api';

describe('Gifs API', () => {
    test('Should fetch trending gifs', async() => {
        const gifs = await fetchGifsTrending();
        expect(gifs.length).toBe(25);
    });

    test('Should fetch search gifs', async() => {
        const gifs = await fetchGifsSearch('elmo');
        expect(gifs.length).toBe(25);
    });
});
