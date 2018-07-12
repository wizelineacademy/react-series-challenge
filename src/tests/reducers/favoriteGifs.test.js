import favoriteGifsActions from '../../actions/favoriteGifs';
import favoriteGifsReducer from '../../reducers/favoriteGifs';

const { FAVORITE_GIFS_ADD, FAVORITE_GIFS_DELETE, FAVORITE_GIFS_FILTER } = favoriteGifsActions.types;

const gif = {
    type: "gif",
    id: "xT0xelIcrwVocTirvO",
    slug: "willandgrace-will-and-grace-xT0xelIcrwVocTirvO",
    url: "https://giphy.com/gifs/willandgrace-will-and-grace-xT0xelIcrwVocTirvO",
    bitly_gif_url: "https://gph.is/2jpQR3t",
    bitly_url: "https://gph.is/2jpQR3t",
    embed_url: "https://giphy.com/embed/xT0xelIcrwVocTirvO",
    username: "willandgrace",
    source: "",
    content_url: "",
    source_tld: "",
    source_post_url: "",
    is_sticker: 0,
    import_datetime: "2017-11-26 17:34:50",
    trending_datetime: "2018-05-25 06:00:01",
    images: {
        original: {
            url: "https://media3.giphy.com/media/xT0xelIcrwVocTirvO/giphy.gif",
            width: "455",
            height: "455",
            size: "1875522",
            frames: "16",
            mp4: "https://media3.giphy.com/media/xT0xelIcrwVocTirvO/giphy.mp4",
            mp4_size: "398093",
            webp: "https://media3.giphy.com/media/xT0xelIcrwVocTirvO/giphy.webp",
            webp_size: "713304",
            hash: "59f44cc8fbabdf1e66b7c094080529b7"
        },
    }
};

const initialState = {
    filtered: {},
    favs: {}
};

const deleteInitialState = {
    filtered: {},
    favs: { "xT0xelIcrwVocTirvO": gif }
};

const filterInitialState = {
    filtered: {},
    favs: { "xT0xelIcrwVocTirvO": gif }
};

describe('favorite gifs reducer', () => {
    it('should return the initial state', () => {
        expect(favoriteGifsReducer(initialState, {})).toEqual(initialState)
    });

    it('should handle FAVORITE_GIFS_ADD', () => {

        expect(
            favoriteGifsReducer(initialState, {
                type: FAVORITE_GIFS_ADD,
                payload: { gif }
            })
        ).toEqual(
            {
                filtered: {},
                favs: { ...initialState.favs, [gif.id]: gif }
            }
        );
    });

    it('should handle FAVORITE_GIFS_DELETE', () => {

        expect(
            favoriteGifsReducer(deleteInitialState, {
                type: FAVORITE_GIFS_DELETE,
                payload: { gif }
            })
        ).toEqual(
            {
                filtered: {},
                favs: { }
            }
        );
    });

    it('should handle FAVORITE_GIFS_FILTER', () => {

        expect(
            favoriteGifsReducer(deleteInitialState, {
                type: FAVORITE_GIFS_FILTER,
                payload: "willandgrace"
            })
        ).toEqual(
            {
                filtered: { },
                favs: { }
            }
        );
    });
});
