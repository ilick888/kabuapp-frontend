
const config = () => {
    if (process.env.NODE_ENV === 'development') {
      // start
      return 'http://0.0.0.0:8000'
    } else if (process.env.NODE_ENV === 'production') {
      // production
      return 'http://35.200.56.131/'
    }
}

export const root_url = config()