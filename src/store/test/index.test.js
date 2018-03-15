/**
 * @jest-environment node
 */
import store from '..'

 describe('localStorage', () => {
  it('will return store', () => {
    expect(store).toBeTruthy()
  })
});
