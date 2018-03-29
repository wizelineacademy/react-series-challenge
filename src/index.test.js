import Index from './index.js';

it('index test', () => {
  expect(JSON.stringify(
    Object.assign({}, Index, { _reactInternalInstance: 'censored' })
  )).toMatchSnapshot();
});