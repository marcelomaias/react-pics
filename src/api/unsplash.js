import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID a8b729ac0442b7387ebf82204ca72bc5ebb67a42da8ca61a03d13051a1980a1c'
  }
})
