import request from './request'
import config from './config'

const endPoints = {
  search: {
    get: (q, limit, offset, apiKey) => `${config.search.baseUrl}&api_key=${apiKey}&limit=${limit}&q=${q}&offset=${offset}`
  },
  trending: {
    get: (limit, apiKey) => `${config.trending.baseUrl}&api_key=${apiKey}&limit=${limit}`
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
export default {
  search,
  trending
}
