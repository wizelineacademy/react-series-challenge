import API from './api/Giphy';
import {call, put, take} from 'redux-saga/effects'
import { cloneableGenerator } from 'redux-saga/utils';
describe('Search Box', () => {
    it('calls request and success actions if the fetch response was successful', () => {
        /*window.fetch = jest.fn().mockImplementation(() =>
          Promise.resolve(mockResponse(200, null, '{"ids":{"provider":' + id + '}}')));
      
        return store.dispatch(fetchData(id))
          .then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions.length).toBe(2);
            expect(expectedActions).toContainEqual({type: types.FETCH_DATA_REQUEST});
            expect(expectedActions).toContainEqual({type: types.FETCH_DATA_SUCCESS, data });
          })*/
          const resp = 'tt';
          jest.mock(fetch);
          fetch.get.mockResolvedValue(resp);
          console.log(fetch('dd0').then(resp => resp.data));
          console.log(window.fetch('dd'));
          console.log(API.loadTrending())
          expect(_fetch).toHaveBeenCalledTimes(1);
          expect(window.fetch).toHaveBeenCalledTimes(1);
      });
});