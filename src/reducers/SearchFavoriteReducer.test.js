import { store } from "../store";
import searchFavoriteGifsActions from "../actions/searchFavoriteGifs";

describe("Search in favorites", () => {
    const payload = {
        query: "water",
        favoriteGifs: {
            "1XddNncHsnyPwN8sV2": {
                title: "soccer de alta nivel",
            },
            "2xPJgFViwgMv1O42DK": {
                title: "water",
            }
        }
    }
    test("dispatch GET_FAVORITE_SEARCH_GIFS", () => {
        store.dispatch(searchFavoriteGifsActions.creators.getSearchFavoriteGifs(payload));
        expect(store.getState()).toMatchSnapshot();
    })
})