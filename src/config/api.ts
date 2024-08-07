import axios from 'axios'

const BASE_API = 'http://localhost:3000'

const api = axios.create({
  baseURL: BASE_API
})

export default api
