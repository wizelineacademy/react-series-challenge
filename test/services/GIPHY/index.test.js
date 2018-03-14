import giphy from '../../../src/services/GIPHY'
jest.mock('../../../src/services/GIPHY/request')

describe('giphy service', () => {
  it('creates url by id', () => {
    expect(giphy.byId.get('1')).toEqual('/1?api_key=undefined')
  })
  it('creates url for searching', () => {
    expect(giphy.search.get('search')).toEqual('/search?rating=G&lang=en&api_key=undefined&limit=24&q=search&offset=0')
  })
  it('creates for trending', () => {
    expect(giphy.trending.get()).toEqual('/trending?rating=G&api_key=undefined&limit=24')
  })
  it('creates url for different ids', () => {
    expect(giphy.byIds.get('1,2')).toEqual('?api_key=undefined&ids=1,2')
  })
})
