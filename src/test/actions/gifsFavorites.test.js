import { addGifToFavorites, removeGifToFavorites, updateTextFilter, } from '../../actions/gifsFavorites';

const gif = { id: '01010101', title: 'my gif', images: { fixed_height_downsampled: { url: 'http://www.zyzyzy', width: '100px', height: '100' } } };

describe('Gifs favorites actions', () => {
    test('Should add gif to favorites', () => {
        const fav = addGifToFavorites(gif);
        expect(fav).toEqual({ type: 'GIF_FAVORITE_ADD', gif: gif });
    });

    test('Should remove git from favorites', () => {
        const removeGif = removeGifToFavorites(gif);
        expect(removeGif).toEqual({ type: 'GIF_FAVORITE_REMOVE', gif: gif });
    });

    test('Should search from favorites', () => {
        const search = updateTextFilter('elmo');
        expect(search).toEqual({ type: 'GIF_UPDATE_TEXT_FILTER', searchQuery: 'elmo' });
    });
});