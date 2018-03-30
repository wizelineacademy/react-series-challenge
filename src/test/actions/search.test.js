import searchActions from '../../actions/search';

describe('action creators for search', () => {

  it('Action creator: getSearchRequested', () => {
    const queryStr = 'happy';
    const request = searchActions.creators.getSearchRequested(queryStr);
    expect(request).toEqual({ type: 'GET_SEARCH_REQUESTED', queryStr: queryStr });
  });

  it('Action creator: getSearchCompleted', () =>{
    const search = { data: {id: 1234, image: 'https://image.gif'}}
    const request = searchActions.creators.getSearchCompleted(search);
    expect(request).toEqual({ type: 'GET_SEARCH_COMPLETED', search });
  });

  it('Action creator: getSearchFailed', () => {
    const error = "error 1";
    const request = searchActions.creators.getSearchFailed(error);
    expect(request).toEqual({ type: 'GET_SEARCH_FAILED', error });
  });

  it('Action type: GET_SEARCH_REQUESTED', () => {
    const type = 'GET_SEARCH_REQUESTED';
    const typeRes = searchActions.types.GET_SEARCH_REQUESTED;
    expect(typeRes).toEqual(type);
  });
  
});
