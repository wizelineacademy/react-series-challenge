import actionsDic from "./../../constants/actions";
import actions from "./../index";

describe('Redux Actions > ', () => {
  it('should create an action to set "search" string', () => {
    const search = 'myDummySearch';
    const expectedAction = {
      type: actionsDic.FETCH_REQUEST,
      payload: {
        search,
      },
    };

    expect(actions.fetchChange(search)).toEqual(expectedAction);
  });

  it('should create an action to set "filter" string', () => {
    const filter = 'myFilter';
    const expectedAction = {
      type: actionsDic.LOCALSTORAGE_FIND,
      payload: {
        filter,
      },
    };

    expect(actions.localFind(filter)).toEqual(expectedAction);
  })

  it('should create an action to set "add or remove from like"', () => {
    const object = 'myFilter';
    const expectedAction = {
      type: actionsDic.LOCALSTORAGE_MODIFY,
      payload: {
        object,
      },
    };

    expect(actions.modifyLocal(object)).toEqual(expectedAction);
  })
});