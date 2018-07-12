import allGifs from '../../reducers/allGifs';
import axios from 'axios';

jest.mock('axios');
const testElement = {elements: {testKey:{id:'20012'}}};
const url = `https://api.giphy.com/v1/gifs/trending?api_key=X6LoG2xSv6iWz6Vj5RqopNfzCs9iQLaO&limit=10`;

describe('allGifs reducer set initial state', () => {
    it('Should return the initial state', () => {
        expect(allGifs(undefined,{})).toEqual({});
    });

    it('Should handle FETCH_ALL_GIFS', () => {
        axios.get.mockImplementation(() => Promise.resolve(testElement));

        // return axios function and expect().toEqual()with testElement
        return axios.get(url).then(gifs => expect(gifs).toEqual(testElement));
   });
})