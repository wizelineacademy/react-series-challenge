
import actions from '../../src/actions/modal';

describe('Modal Actions', function () {
  it('check Details actions trigger correct Action Types', () => {
    const { 
      MODAL_HIDE,
      MODAL_SHOW
    } = actions.types;
    const { 
      showModal,
      hideModal
    } = actions.creators;

    expect(showModal('data')).toEqual({ type: MODAL_SHOW, payload: 'data' });
    expect(hideModal('data')).toEqual({ type: MODAL_HIDE });

  });
});
