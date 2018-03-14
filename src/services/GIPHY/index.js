import request from './request'
import config from './config'

const endPoints = {
  search: {
    get: (q, limit, offset, apiKey) => `${config.search.url}&api_key=${apiKey}&limit=${limit}&q=${q}&offset=${offset}`
  },
  trending: {
    get: (limit, apiKey) => `${config.trending.url}&api_key=${apiKey}&limit=${limit}`
  },
  byId: {
    get: (id, apiKey) => `${config.byId.url}${id}?api_key=${apiKey}`
  },
  byIds: {
    get: (ids, apiKey) => `${config.byIds.url}?api_key=${apiKey}&ids=${ids}`
  }
}

const searchGet = (q, limit=config.defaultLimit, offset=0) => request.get(endPoints.search.get(q, limit, offset, config.apiKey))
const search = {
  get: searchGet
}

const trendingGet = (limit=config.defaultLimit) => request.get(endPoints.trending.get(limit, config.apiKey))
const trending = {
  get: trendingGet
}

const byIdGet = id => request.get(endPoints.byId.get(id, config.apiKey))
const byId = {
  get: byIdGet
}

const byIdsGet = ids => request.get(endPoints.byIds.get(ids, config.apiKey))
const byIds = {
  get: byIdsGet
}

export default {
  byId,
  byIds,
  search,
  trending
}
