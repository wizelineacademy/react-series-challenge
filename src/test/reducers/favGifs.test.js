import favGifs from '../../reducers/favGifs';
import {ADD_ITEM,SEARCH_FAV_GIFS} from '../../reducers/favGifs';

const testElement = {elements: {testKey:{id:'20012'}}};
const testString  = 'test string';
const favGifsInitialState = {
    searchFavs:{},
    favs:{}
}

describe('addGifs reducer', () => {
    it('Should return the initial state', () => {
        expect(favGifs(undefined,favGifsInitialState
        )).toEqual(favGifsInitialState);
    });

    it('Should add Gif to favGifs state', () => {
        const loadFavGifs = {
            type : ADD_ITEM,
            gif  :  testElement
        };
        expect(loadFavGifs.gif).toEqual(testElement);
    });

    it('Should add Gif if it has a string similar at his title', () => {
        const searchFavGifs = {
            type   : SEARCH_FAV_GIFS,
            string : testString
        };
        expect(searchFavGifs.string).toEqual(testString);
    });
})