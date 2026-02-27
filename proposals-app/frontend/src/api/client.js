import axios from 'axios'

const API_BASE = '/api/proposals'

const client = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests if it exists
client.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const proposalsAPI = {
  list: () => client.get(''),
  get: (id) => client.get(`/${id}`),
  create: (data) => client.post('', data),
  update: (id, data) => client.put(`/${id}`, data),
  delete: (id) => client.delete(`/${id}`),
}

// Auth client uses different base URL
const authClient = axios.create({
  baseURL: '/api/auth',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const authAPI = {
  login: (password) => authClient.post('/login', { password }),
}

export default client
