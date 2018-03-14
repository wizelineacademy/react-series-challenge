import config from './config'

const get = url => fetch(`${config.baseUrl}${url}`, { headers: config.headers, method: 'GET' })

export default {
  get
}
