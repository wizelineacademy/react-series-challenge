import reducer from '../../src/reducers/details';
import actions from '../../src/actions/details';

describe('Details reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isLoading: false,
        giphy:{},
        errorMessage: ''
      }
    );
  });


  it('test DETAILS START ', () => {
    expect(reducer(undefined, actions.creators.fetchDetailsStart('hello'))).toEqual(
      {
        isLoading: true,
        giphy:{},
        errorMessage: ''
      }
    );
  });

  it('test DETAILS SUCCESS ', () => {
    expect(reducer(undefined, actions.creators.fetchDetailsSuccess('hello'))).toEqual(
      {
        isLoading: false,
        giphy:'hello',
        errorMessage: ''
      }
    );
  });

  it('test DETAILS FAIL ', () => {
    expect(reducer(undefined, actions.creators.fetchDetailsFail('hello'))).toEqual(
      {
        isLoading: false,
        giphy:{},
        errorMessage: 'hello'
      }
    );
  });
});