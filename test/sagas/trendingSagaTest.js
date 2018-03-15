import { trendingSaga  } from '../../src/sagas/trendingSagas';
import actions from '../../src/actions/trending';
import { put, call } from 'redux-saga/effects';
import giphyApi from '../../src/apis/giphy';
import favActions from '../../src/actions/favorites'
//This Saga does not call APIs

describe('Trending Sagas Tests', () => {

  test('Trending Saga Success fetch', () => {
    const mockResponse = {
      status:200,
      json: () =>(
        {data: [ 
          {
            isFav: false,
            id:"3oEduXtXta9onVDlIc",
            images: {
              preview_gif: 'myPreview',
              downsized_large: 'MyLargeImage'
            },
            title :"sad dog GIF by The BarkPost "
          }
        ]}
      )
    }

    let sagaIterator = trendingSaga(actions.creators.trendingRequest('dummyId'));
    expect(sagaIterator.next().value).toEqual(put(actions.creators.trendingStart()));
    //Call to API and value is returned
    expect(sagaIterator.next().value).toEqual(call(giphyApi.trending,'dummyId'));
    let data = sagaIterator.next(mockResponse).value
    expect(sagaIterator.next(data).value).toEqual(put(actions.creators.trendingSuccess([ 
      {
        isFav: false,
        id:"3oEduXtXta9onVDlIc",
        images: {
          preview_gif: 'myPreview',
          downsized_large: 'MyLargeImage'
        },
        title :"sad dog GIF by The BarkPost "
      }
    ])));
    expect(sagaIterator.next().value).toEqual(put(favActions.creators.updateIsFav()));

  });


  test('Trending Saga Fail fetch', () => {
    const mockResponse = {
      status: 403,
      json: () =>(
        {data: 'errorAPO'}
      )
    }

    let sagaIterator = trendingSaga(actions.creators.trendingRequest('dummyId'));
    expect(sagaIterator.next().value).toEqual(put(actions.creators.trendingStart()));
    //Call to API and value is returned
    expect(sagaIterator.next().value).toEqual(call(giphyApi.trending,'dummyId'));
    let data = sagaIterator.next(mockResponse).value
    expect(sagaIterator.next(data).value).toEqual(put(actions.creators.trendingFail( new Error ( { 'data' : 'errorAPO' }) )));

  });

});