import actionsDic from "./../../constants/actions";
import actions from "./../index";

describe('Redux Actions > ', () => {

  describe(' FECTH ACTIONS ', () => {
    it('should create an action to set "word" string', () => {
      const word = 'myDummyWord';
      const expectedAction = {
        type: actionsDic.FETCH_REQUEST,
        payload: {
          word,
        },
      };

      expect(actions.fetchChange(word)).toEqual(expectedAction);
    });

    it('should make loading when fetch is started ', () => {

      const expectedAction = {
        type: actionsDic.FETCH_START
      };

      expect(actions.fetchStart()).toEqual(expectedAction);
    });

    it('should add data when recived from fetching ', () => {
      const data =  [1, 2, 4];
      const expectedAction = {
        type: actionsDic.FETCH_DATA,
        payload: {
          data
        }
      };

      expect(actions.fetchData([1, 2, 4])).toEqual(expectedAction);
    });

    it('should adding into error if returns and error ', () => {
      const error = new Error('simulated error...');
      const expectedAction = {
        type: actionsDic.FETCH_ERROR,
        payload: {
          error
        }
      };

      expect(actions.fetchError(error)).toEqual(expectedAction);
    });

    it('should make loading false when fetch end ', () => {
      const expectedAction = {
        type: actionsDic.FETCH_END
      };

      expect(actions.fetchEnd()).toEqual(expectedAction);
    });
  });

  describe(' LOCAL ACTIONS ', () => {
    it('should create an action to set "filter" string', () => {
      const filter = 'myFilter';
      const expectedAction = {
        type: actionsDic.LOCALSTORAGE_FIND,
        payload: {
          filter,
        },
      };

      expect(actions.localFind(filter)).toEqual(expectedAction);
    });

    it('should create an action to set "add or remove from like"', () => {
      const object = 'myFilter';
      const expectedAction = {
        type: actionsDic.LOCALSTORAGE_MODIFY,
        payload: {
          object,
        },
      };

      expect(actions.localModify(object)).toEqual(expectedAction);
    });

    it('should get data from local', () => {
      const data = { likes: [{ justADummy: 1}], ids: ['aaxxx'] };
      const expectedAction = {
        type: actionsDic.LOCALSTORAGE_DATA,
        payload: {
          data
        },
      };

      expect(actions.localSetData(data)).toEqual(expectedAction);
    });
  });


});