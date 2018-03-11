import config from './config'

const get = url => fetch(url, { headers: config.headers, method: 'GET' })

export default {
  get
}
