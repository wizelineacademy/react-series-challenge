import request from '../../../src/services/GIPHY/request'

describe('giphy request service', () => {
  it('fetches a given url', () => {
    expect(request.get('https://api.giphy.com/v1/gifs/trending')).toBeTruthy()
  })
})
