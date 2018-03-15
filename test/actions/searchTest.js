
import actions from '../../src/actions/search';

describe('Sarch Actions', function () {
  it('check Details actions trigger correct Action Types', () => {
    const { 
      SEARCH_REQUEST,
      SEARCH_START,
      SEARCH_SUCCESS,
      SEARCH_FAIL,
      SEARCH_TERM_UPDATE,
      SEARCH_TERM_UPDATE_REQUEST
    } = actions.types;
    const { 
      searchRequest,
      searchStart,
      searchSuccess,
      searchFail,
      updateSearchTerm,
      updateSearchTermRequest
    } = actions.creators;

    expect(searchRequest('data')).toEqual({ type: SEARCH_REQUEST, payload: 'data' });
    expect(searchStart('data')).toEqual({ type: SEARCH_START });
    expect(searchSuccess('data')).toEqual({ type: SEARCH_SUCCESS , payload: 'data' });
    expect(searchFail('data')).toEqual({ type: SEARCH_FAIL, payload: 'data'  });
    expect(updateSearchTerm('data')).toEqual({ type: SEARCH_TERM_UPDATE , payload: 'data' });
    expect(updateSearchTermRequest('data')).toEqual({ type: SEARCH_TERM_UPDATE_REQUEST, payload: 'data'  });
  });
});
