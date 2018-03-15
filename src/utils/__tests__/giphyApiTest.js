import {
  fetchTrendingGiphysFromWS,
  fetchSearchedGiphysFromWS,
  fetchGiphysByIdsFromWS,
  fetchGiphyDetailFromWS
} from '../giphyApi';

it('fetchTrendingGiphysFromWS should return response body', (done) => {
  fetch.mockResponseOnce(
    JSON.stringify({id: 'test'}),
    {
      status: 200,
      statusText: 'OK'
    }
  );

  fetchTrendingGiphysFromWS()
    .then((value) => {
      done();
      expect(value).toEqual({id: 'test'});
    })
});

it('fetchTrendingGiphysFromWS should fail on non 2xx status', (done) => {
  fetch.mockResponseOnce(
    JSON.stringify({id: 'test'}),
    {
      status: 300,
      statusText: 'fake error message'
    }
  );

  fetchTrendingGiphysFromWS()
    .catch((error) => {
      done();
      expect(error).toBeTruthy();
    })
});

it('fetchSearchedGiphysFromWS should return response body', (done) => {
  fetch.mockResponseOnce(
    JSON.stringify({id: 'test'}),
    {
      status: 200,
      statusText: 'OK'
    }
  );

  fetchSearchedGiphysFromWS()
    .then((value) => {
      done();
      expect(value).toEqual({id: 'test'});
    })
});

it('fetchSearchedGiphysFromWS should fail on non 2xx status', (done) => {
  fetch.mockResponseOnce(
    JSON.stringify({id: 'test'}),
    {
      status: 300,
      statusText: 'fake error message'
    }
  );

  fetchSearchedGiphysFromWS()
    .catch((error) => {
      done();
      expect(error).toBeTruthy();
    })
});

it('fetchGiphysByIdsFromWS should return response body', (done) => {
  fetch.mockResponseOnce(
    JSON.stringify({id: 'test'}),
    {
      status: 200,
      statusText: 'OK'
    }
  );

  fetchGiphysByIdsFromWS([])
    .then((value) => {
      done();
      expect(value).toEqual({id: 'test'});
    })
});

it('fetchGiphysByIdsFromWS should fail on non 2xx status', (done) => {
  fetch.mockResponseOnce(
    JSON.stringify({id: 'test'}),
    {
      status: 300,
      statusText: 'fake error message'
    }
  );

  fetchGiphysByIdsFromWS([])
    .catch((error) => {
      done();
      expect(error).toBeTruthy();
    })
});

it('fetchGiphyDetailFromWS should return response body', (done) => {
  fetch.mockResponseOnce(
    JSON.stringify({id: 'test'}),
    {
      status: 200,
      statusText: 'OK'
    }
  );

  fetchGiphyDetailFromWS('testId')
    .then((value) => {
      done();
      expect(value).toEqual({id: 'test'});
    })
});

it('fetchGiphyDetailFromWS should fail on non 2xx status', (done) => {
  fetch.mockResponseOnce(
    JSON.stringify({id: 'test'}),
    {
      status: 300,
      statusText: 'fake error message'
    }
  );

  fetchGiphyDetailFromWS('testId')
    .catch((error) => {
      done();
      expect(error).toBeTruthy();
    })
});