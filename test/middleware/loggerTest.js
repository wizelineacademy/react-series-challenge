import loggerMiddleware from '../../src/middlewares/logger';

const createMockStore = () => {
  const times = jest.fn();
  const store = {
    getState: jest.fn(() => {
      times();
      return {
        times: times.mock.calls.length 
      };
    }),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = action => loggerMiddleware(store)(next)(action);

  return { store, next, invoke };
};

describe('LoggerMiddleware Tests **',() => {

  it('passes through actions', () => {
    let outputData = '';
    let storeLog = inputs => (outputData += JSON.stringify(inputs));
    console['log'] = jest.fn(storeLog); // eslint-disable-line 
    const { store, next, invoke } = createMockStore();
    const action = { type: 'TEST' };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
    // expect(next.mock.calls.lenght).toBe(1);
    expect(store.getState.mock.calls.length).toBe(2);
    expect(unescape(outputData)).toBe('\"TEST\"{\"times\":1}{\"type\":\"TEST\"}{\"times\":2}'); // eslint-disable-line 
  });

});