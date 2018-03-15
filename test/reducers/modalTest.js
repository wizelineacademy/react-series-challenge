import reducer from '../../src/reducers/modal';
import actions from '../../src/actions/modal';

describe('Favorites reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isModalOpen: false,
        selectedGiphy: {}
      }
    );
  });


  it('test MODAL HIDE ', () => {
    expect(reducer(undefined, actions.creators.hideModal('hello'))).toEqual(
      {
        isModalOpen: false,
        selectedGiphy: {}
      }
    );
  });

  it('test MODAL SHOW ', () => {
    expect(reducer(undefined, actions.creators.showModal('hello'))).toEqual(
      {
        isModalOpen: true,
        selectedGiphy: 'hello'
      }
    );
  });
});