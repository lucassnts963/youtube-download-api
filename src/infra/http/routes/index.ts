import { Router } from 'express'

import downloadRoutes from './downloadRoutes'
import infoRoutes from './infoRoutes'

const routes = Router()

routes.use(downloadRoutes, infoRoutes)

routes.get('/', (req, res) => {
  return res.status(200).send('YouTube Download Service API')
})

export default routes
