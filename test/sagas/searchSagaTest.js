import { searchSaga , updateSearchTermSaga } from '../../src/sagas/searchSagas';
import actions from '../../src/actions/search';
import { put, call } from 'redux-saga/effects';
import giphyApi from '../../src/apis/giphy';
import favActions from '../../src/actions/favorites'
//This Saga does not call APIs

describe('Search Sagas Tests', () => {

  test('Search Saga Success fetch', () => {
    const mockResponse = {
      status:200,
      json: () =>(
        {data: 'dataApi'}
      )
    }

    let sagaIterator = searchSaga(actions.creators.searchRequest('dummyId'));
    expect(sagaIterator.next().value).toEqual(put(actions.creators.searchStart()));
    //Call to API and value is returned
    expect(sagaIterator.next().value).toEqual(call(giphyApi.search,'dummyId'));
    let data = sagaIterator.next(mockResponse).value
    expect(sagaIterator.next(data).value).toEqual(put(actions.creators.searchSuccess( 'dataApi')));
    expect(sagaIterator.next().value).toEqual(put(favActions.creators.updateIsFav()));

  });


  test('Search Saga Fail fetch', () => {
    const mockResponse = {
      status: 403,
      json: () =>(
        {data: 'errorAPO'}
      )
    }

    let sagaIterator = searchSaga(actions.creators.searchRequest('dummyId'));
    expect(sagaIterator.next().value).toEqual(put(actions.creators.searchStart()));
    //Call to API and value is returned
    expect(sagaIterator.next().value).toEqual(call(giphyApi.search,'dummyId'));
    let data = sagaIterator.next(mockResponse).value
    expect(sagaIterator.next(data).value).toEqual(put(actions.creators.searchFail( new Error ( { 'data' : 'errorAPO' }) )));

  });

  test('Search Saga update Term ', () => {
    let sagaIterator = updateSearchTermSaga(actions.creators.updateSearchTermRequest('dummyId'));
    expect(sagaIterator.next().value).toEqual(put(actions.creators.updateSearchTerm('dummyId')))

  })
});