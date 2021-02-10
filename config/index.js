import publicRoutes from './routes/publicRoutes'
import privateRoutes from './routes/privateRoutes'

const config = {
  migrate: false,
  privateRoutes,
  publicRoutes,
  port: process.env.PORT || '3000'
}

export default config
