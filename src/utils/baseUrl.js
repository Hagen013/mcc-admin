
let baseURL = 'https://ingrad.sarex.ru/api/'

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8000/api/'
}

export default baseURL