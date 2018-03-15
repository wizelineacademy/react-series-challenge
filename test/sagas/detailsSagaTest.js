import { fetchGiphySaga} from '../../src/sagas/detailsSagas';
import actions from '../../src/actions/details';
import { put, call } from 'redux-saga/effects';
import giphyApi from '../../src/apis/giphy';
import favActions from '../../src/actions/favorites'
//This Saga does not call APIs

describe('Details Sagas Tests', () => {

  test('Details Saga Success fetch', () => {
    const mockResponse = {
      status:200,
      json: () =>(
        {data: 'dataApi'}
      )
    }

    let sagaIterator = fetchGiphySaga(actions.creators.fetchDetails('dummyId'));
    expect(sagaIterator.next().value).toEqual(put(actions.creators.fetchDetailsStart()));
    //Call to API and value is returned
    expect(sagaIterator.next().value).toEqual(call(giphyApi.fetchGiphy,'dummyId'));
    let data = sagaIterator.next(mockResponse).value
    expect(sagaIterator.next(data).value).toEqual(put(actions.creators.fetchDetailsSuccess( 'dataApi')));
    expect(sagaIterator.next().value).toEqual(put(favActions.creators.updateIsFav()));

  });


  test('Details Saga Fail fetch', () => {
    const mockResponse = {
      status: 403,
      json: () =>(
        {data: 'errorAPO'}
      )
    }

    let sagaIterator = fetchGiphySaga(actions.creators.fetchDetails('dummyId'));
    expect(sagaIterator.next().value).toEqual(put(actions.creators.fetchDetailsStart()));
    //Call to API and value is returned
    expect(sagaIterator.next().value).toEqual(call(giphyApi.fetchGiphy,'dummyId'));
    let data = sagaIterator.next(mockResponse).value
    expect(sagaIterator.next(data).value).toEqual(put(actions.creators.fetchDetailsFail( new Error ( { 'data' : 'errorAPO' }) )));

  });


});