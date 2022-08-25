import { Router } from 'express'

import InfoVideoController from '../controllers/infoController'

const infoRoutes = Router()

infoRoutes.get('/info', InfoVideoController.getInfo)

export default infoRoutes
