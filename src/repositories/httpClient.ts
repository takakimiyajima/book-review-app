import axiosBase from 'axios'

// NOTE: Google Books API
const axios = axiosBase.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes'
})

export default axios
