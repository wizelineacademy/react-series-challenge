import favoriteGifsActions from '../actions/favoriteGifs';

const LOCAL_STORAGE_FAV_GIFS = 'favoriteGifs';

const updateFavGifInLocalStorage  = (gif, isFavorite) => {
    let jsonFavGifs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAV_GIFS));
    if (isFavorite) {
        if (jsonFavGifs) {
            jsonFavGifs[gif.id] = gif.id;
        } else {
            jsonFavGifs = {[gif.id]: gif.id}
        }

    } else {
        delete jsonFavGifs[gif.id];
    }

    localStorage.setItem(LOCAL_STORAGE_FAV_GIFS, JSON.stringify(jsonFavGifs));
};

const favGifStorage = (store) => (next) => (action) => {

    const { gif, isFavorite } = action.payload || {};
    const { FAVORITE_GIFS_ADD, FAVORITE_GIFS_DELETE } = favoriteGifsActions.types;

    if (action.type === FAVORITE_GIFS_ADD || action.type === FAVORITE_GIFS_DELETE ) {
        updateFavGifInLocalStorage(gif, isFavorite);
    }

    return next(action);
};

export default favGifStorage;