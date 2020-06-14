
const config = () => {
    if (process.env.NODE_ENV === 'development') {
      // start
      return 'http://0.0.0.0:8000'
    } else if (process.env.NODE_ENV === 'production') {
      // production
      return 'http://34.84.109.76'
    }
}

export const root_url = config()