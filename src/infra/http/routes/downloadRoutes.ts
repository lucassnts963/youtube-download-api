import { Router } from 'express'
import { DownloadController } from '../controllers/downloadController'

const downloadRoutes = Router()

downloadRoutes.get('/download', DownloadController.download)
downloadRoutes.get('/download/video', DownloadController.downloadVideo)
downloadRoutes.get('/download/playlist', DownloadController.downloadPlaylist)

export default downloadRoutes
