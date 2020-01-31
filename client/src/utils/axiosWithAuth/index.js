import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
  const baseURL = 'http://localhost:8888/api'
  return axios.create({
    baseURL: baseURL,
    headers: {
      authorization: token,
    },
  })
}
