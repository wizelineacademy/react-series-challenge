import favorites from "./../favorites";
import getAllGifs from "./../getAllTrendingGifs";
import searchGif from "./../searchGif";

const mock = [
    { url: "https://media3.giphy.com/media/9D5c28pzK5sOcih2oE/100.gif", id: "9D5c28pzK5sOcih2oE", title: "happy louie anderson GIF by BasketsFX" },
    { url: "https://media1.giphy.com/media/jIptyaX5Q7tdH2jLNZ/100.gif", id: "jIptyaX5Q7tdH2jLNZ", title: "glow alison brie GIF by NETFLIX" }
]

const mockDelete = [
    { url: "https://media3.giphy.com/media/9D5c28pzK5sOcih2oE/100.gif", id: "9D5c28pzK5sOcih2oE", title: "happy louie anderson GIF by BasketsFX" },
]

describe('favorites ', () => {
    it('ADD_FAVORITES test', () => {
        const action = {
            type: 'ADD_FAVORITES',
            add: mock,
        };

        expect(favorites([], action)).toEqual(mock);
    });

    it('GET_FAVORITES test', () => {
        const action = {
            type: 'GET_FAVORITES',
            gifs: mock,
        };

        expect(favorites([], action)).toEqual(mock);
    });

    it('DELETE_FAVORITES test', () => {
        const action = {
            type: 'DELETE_FAVORITES',
            id: mockDelete,
        };

        expect(favorites([], action)).toEqual(mockDelete);
    });
    it('state test', () => {
        const action = {
            type: 'Null',
            id: [],
        };

        expect(favorites([], action)).toEqual([]);
    });
});

describe('getAllGifs', () => {
    it('GET_TRENDING_GIF test', () => {
        const action = {
            type: 'GET_TRENDING_GIF',
            products: { id: 1, title: "hola mundo" },
        };

        expect(getAllGifs([], action)).toEqual({ id: 1, title: "hola mundo" });
    });

    it('GET_TRENDING_FAILED test', () => {
        const action = {
            type: 'GET_TRENDING_GIF',
            products: { id: 1, error: "intenta mas tarde" },
        };
        expect(getAllGifs([], action)).toEqual({ id: 1, error: "intenta mas tarde" });
    });

    it('state test', () => {
        const action = {
            type: 'Null',
            id: [],
        };

        expect(getAllGifs([], action)).toEqual([]);
    });
});

describe('getAllGifs', () => {
    it('SEARCH_RESULT test', () => {
        const action = {
            type: 'SEARCH_RESULT',
            result: mock,
        };

        expect(searchGif([], action)).toEqual(mock);
    });

    it('SEARCH_EVENT test', () => {
        const action = {
            type: 'SEARCH_EVENT',
            result: mock,
        };
        expect(searchGif([], action)).toEqual(mock);
    });

    it('state test', () => {
        const action = {
            type: 'Null',
            result: [],
        };

        expect(searchGif([], action)).toEqual([]);
    });
});