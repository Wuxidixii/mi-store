import axios from "./axios"

export const getImage = () => {
  return axios.request({
    url: '/image/getImage',
    method: 'get'
  })
}
