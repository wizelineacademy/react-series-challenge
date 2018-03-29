import logger from '../middlewares/logger';

const create = () => {
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn(),
    };
    const next = jest.fn()

    const invoke = (action) => logger(store)(next)(action)

    return { store, next, invoke }
};

it('passes through non-function action', () => {
    const { next, invoke } = create()
    const action = { type: 'TEST' }
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
})