import axios from 'axios';
import { fetchGifsTrending, fetchGifsSearch, } from '../../Api/api';

jest.mock('axios')

describe('Gifs api', () => {
    test('should fetch gifs trending', () => {
        const resp = { data: [{ id: 'id', title: 'title', gif: { images: { fixed_height_downsampled: {} } } }] };
        axios.get.mockResolveValue(resp)

        return fetchGifsTrending.then(gifs => expect(gifs).toEqual(resp.data));
    });
});