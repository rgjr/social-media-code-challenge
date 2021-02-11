import publicRoutes from './routes/publicRoutes'

const config = {
  migrate: false,
  publicRoutes,
  port: process.env.PORT || '3000'
}

export default config
