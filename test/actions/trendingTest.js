
import actions from '../../src/actions/trending';

describe('Trending Actions', function () {
  it('check Details actions trigger correct Action Types', () => {
    const { 
      TRENDING_REQUEST,
      TRENDING_START,
      TRENDING_SUCCESS,
      TRENDING_FAIL
    } = actions.types;
    const { 
      trendingRequest,
      trendingStart,
      trendingSuccess,
      trendingFail
    } = actions.creators;

    expect(trendingRequest('data')).toEqual({ type: TRENDING_REQUEST, payload: 'data' });
    expect(trendingStart('data')).toEqual({ type: TRENDING_START });
    expect(trendingSuccess('data')).toEqual({ type: TRENDING_SUCCESS , payload: 'data' });
    expect(trendingFail('data')).toEqual({ type: TRENDING_FAIL, payload: 'data'  });
  });
});
