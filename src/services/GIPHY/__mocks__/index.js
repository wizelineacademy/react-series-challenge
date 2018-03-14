const byId = {get: jest.fn(() => Promise.resolve({}))}
const byIds = {get: jest.fn(() => Promise.resolve({}))}
const search = {get: jest.fn(() => Promise.resolve({}))}
const trending = {get: jest.fn(() => Promise.resolve({}))}

export default {
  byId,
  byIds,
  search,
  trending
}
