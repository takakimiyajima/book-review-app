import axios from 'axios'

// NOTE: Google Books API
const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes'
})

export { httpClient }
