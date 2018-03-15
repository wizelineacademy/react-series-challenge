
import actions from '../../src/actions/details';

describe('Details Actions', function () {
  it('check Details actions trigger correct Action Types', () => {
    const { DETAILS_FETCH_FAIL, DETAILS_FETCH_REQ, DETAILS_FETCH_SUCCESS, DETAILS_FETCH_START} = actions.types;
    const { fetchDetails, fetchDetailsStart, fetchDetailsFail, fetchDetailsSuccess } = actions.creators;

    expect(fetchDetails('data')).toEqual({ type: DETAILS_FETCH_REQ, payload: 'data' });
    expect(fetchDetailsStart('data')).toEqual({ type: DETAILS_FETCH_START });
    expect(fetchDetailsSuccess('data')).toEqual({ type: DETAILS_FETCH_SUCCESS , payload: 'data' });
    expect(fetchDetailsFail('data')).toEqual({ type: DETAILS_FETCH_FAIL, payload: 'data'  });
  });
});
